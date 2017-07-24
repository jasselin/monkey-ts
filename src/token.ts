export interface Token {
  Type: TokenType;
  Literal: string;
}

export enum TokenType {
  ILLEGAL = "ILLEGAL",
  EOF = "EOF",

  // Identifiers + literals
  IDENT = "IDENT",
  INT = "INT",

  // Operators
  ASSIGN = "=",
  PLUS = "+",

  // Delimiters
  COMMA = ",",
  SEMICOLON = ";",

  LPAREN = "(",
  RPAREN = ")",
  LBRACE = "{",
  RBRACE = "}",

  // Keywords
  FUNCTION = "FUNCTION",
  LET = "LET"
}