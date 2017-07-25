import { TokenType, Token, lookupIdent } from "./Token";

function newToken(tokenType: TokenType, literal: string): Token {
    return { Type: tokenType, Literal: literal };
}

let tokenMap = {
    "=": TokenType.ASSIGN,
    ";": TokenType.SEMICOLON,
    "(": TokenType.LPAREN,
    ")": TokenType.RPAREN,
    ",": TokenType.COMMA,
    "+": TokenType.PLUS,
    "-": TokenType.MINUS,
    "*": TokenType.ASTERISK,
    "/": TokenType.SLASH,
    "{": TokenType.LBRACE,
    "}": TokenType.RBRACE,
    "!": TokenType.BANG,
    "<": TokenType.LT,
    ">": TokenType.GT
}

export default class Lexer {
    private input: string;
    private position: number;
    private readPosition: number;
    private ch: string;

    constructor(input: string) {
        this.input = input;
        this.position = 0;
        this.readPosition = 0;
        this.readChar();
    }

    NextToken(): Token {
        let tok: Token;

        this.skipWhitespace();

        if (this.peekChar() == "=") {
            if (this.ch == "=")
                tok = newToken(TokenType.EQ, "==")
            else if (this.ch == "!")
                tok = newToken(TokenType.NOT_EQ, "!=")
            if (tok) {
                this.readChar();
                this.readChar();
                return tok;
            }
        }

        var tokenType = tokenMap[this.ch];
        if (tokenType)
            tok = newToken(tokenType, this.ch);
        else if (this.ch == "")
            tok = newToken(TokenType.EOF, this.ch)
        else if (this.isLetter(this.ch)) {
            let literal = this.readType(this.isLetter);
            tok = newToken(lookupIdent(literal), literal);
            return tok;
        }
        else if (this.isDigit(this.ch)) {
            tok = newToken(TokenType.INT, this.readType(this.isDigit));
            return tok;
        }
        else
            tok = newToken(TokenType.ILLEGAL, this.ch);

        this.readChar();
        return tok;
    }

    private readChar(): void {
        if (this.readPosition >= this.input.length)
            this.ch = "";
        else
            this.ch = this.input[this.readPosition];

        this.position = this.readPosition;
        this.readPosition += 1;
    }

    private peekChar(): string {
        return this.readPosition >= this.input.length ? "" : this.input[this.readPosition];
    }

    private skipWhitespace(): void {
        while (this.ch == " " || this.ch == "\t" || this.ch == "\n" || this.ch == "\r") {
            this.readChar();
        }
    }

    private isLetter(ch: string): boolean {
        return "a" <= ch && ch <= "z" || "A" <= ch && ch <= "Z" || ch == "_";
    }

    private readType(typeFn: Function): string {
        let position = this.position;
        while (typeFn(this.ch))
            this.readChar();
        return this.input.substr(position, this.position - position);
    }

    private isDigit(ch: string): boolean {
        return "0" <= ch && ch <= "9";
    }
}