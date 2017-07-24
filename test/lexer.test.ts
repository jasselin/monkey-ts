import { Token, TokenType } from '../src/token';
import Lexer from '../src/lexer';
import { expect } from 'chai';

describe('method NextToken', () => {
  it('should generate the appropriate tokens', () => {

    let tokens: Array<[TokenType, string]> = [
      [TokenType.LET, "let"],
      [TokenType.IDENT, "five"],
      [TokenType.ASSIGN, "="],
      [TokenType.INT, "5"],
      [TokenType.SEMICOLON, ";"],
      [TokenType.LET, "let"],
      [TokenType.IDENT, "ten"],
      [TokenType.ASSIGN, "="],
      [TokenType.INT, "10"],
      [TokenType.SEMICOLON, ";"],
      [TokenType.LET, "let"],
      [TokenType.IDENT, "add"],
      [TokenType.ASSIGN, "="],
      [TokenType.FUNCTION, "fn"],
      [TokenType.LPAREN, "("],
      [TokenType.IDENT, "x"],
      [TokenType.COMMA, ","],
      [TokenType.IDENT, "y"],
      [TokenType.RPAREN, ")"],
      [TokenType.LBRACE, "{"],
      [TokenType.IDENT, "x"],
      [TokenType.PLUS, "+"],
      [TokenType.IDENT, "y"],
      [TokenType.SEMICOLON, ";"],
      [TokenType.RBRACE, "}"],
      [TokenType.SEMICOLON, ";"],
      [TokenType.LET, "let"],
      [TokenType.IDENT, "result"],
      [TokenType.ASSIGN, "="],
      [TokenType.IDENT, "add"],
      [TokenType.LPAREN, "("],
      [TokenType.IDENT, "five"],
      [TokenType.COMMA, ","],
      [TokenType.IDENT, "ten"],
      [TokenType.RPAREN, ")"],
      [TokenType.SEMICOLON, ";"],
      [TokenType.EOF, ""]
    ];

    let input = `let five = 5;
			  let ten = 10;
			  let add = fn(x, y) {
				  x + y;
			  };
			  
			  let result = add(five, ten);`;

    let l = new Lexer(input);

    for (let i = 0; i < tokens.length; i++) {
      let tokenType = tokens[i];
      let tok = l.NextToken();

      expect(tok.Type).to.equal(tokenType[0], `tokens[${i}]`)
    };
  });
});