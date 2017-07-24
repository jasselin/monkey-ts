import { TokenType, Token } from "./Token";

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
    "{": TokenType.LBRACE,
    "}": TokenType.RBRACE
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

        var tokenType = tokenMap[this.ch];
        if (tokenType)
            tok = newToken(tokenType, this.ch);

        if (this.ch == "")
            tok = newToken(TokenType.EOF, this.ch)

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
}