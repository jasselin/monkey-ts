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
  MINUS = "-",
  ASTERISK = "*",
  SLASH = "/",

  BANG = "!",
  EQ = "==",
  NOT_EQ = "!=",
  LT = "<",
  GT = ">",

  // Delimiters
  COMMA = ",",
  SEMICOLON = ";",

  LPAREN = "(",
  RPAREN = ")",
  LBRACE = "{",
  RBRACE = "}",

  // Keywords
  FUNCTION = "FUNCTION",
  LET = "LET",
  RETURN = "RETURN",
  TRUE = "TRUE",
  FALSE = "FALSE",
  IF = "IF",
  ELSE = "ELSE"
}

var keywords = {
  "fn": TokenType.FUNCTION,
  "let": TokenType.LET,
  "return": TokenType.RETURN,
  "true": TokenType.TRUE,
  "false": TokenType.FALSE,
  "if": TokenType.IF,
  "else": TokenType.ELSE
}

export function lookupIdent(ident: string): TokenType {
  return keywords[ident] || TokenType.IDENT;
}