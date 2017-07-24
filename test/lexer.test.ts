import { Token, TokenType } from '../src/token';
import Lexer from '../src/lexer';
import { expect } from 'chai';

describe('method NextToken', () => {
  it('should generate the appropriate tokens', () => {

    let tokens: Array<[TokenType, string]> = [
      [TokenType.ASSIGN, "="],
      [TokenType.PLUS, "+"],
      [TokenType.LPAREN, "("],
      [TokenType.RPAREN, ")"],
      [TokenType.LBRACE, "{"],
      [TokenType.RBRACE, "}"],
      [TokenType.COMMA, ","],
      [TokenType.SEMICOLON, ";"],
      [TokenType.EOF, ""],
    ];

    let input = "=+(){},;";

    let l = new Lexer(input);

    for (let i = 0; i < tokens.length; i++) {
      let tokenType = tokens[i];
      let tok = l.NextToken();

      expect(tok.Type).to.equal(tokenType[0], `tokens[${i}]`)
    };
  });
});