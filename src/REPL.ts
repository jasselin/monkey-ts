import * as util from "util"
import Lexer from "./lexer"
import { Token, TokenType } from "./token"

const PROMPT = ">> ";

export class REPL {
    static start(process: NodeJS.Process): void {

        var readline = require('readline');
        var rl = readline.createInterface(process.stdin, process.stdout);

        rl.on('line', function (line) {

            if (line == "exit") {
                console.log("Goodbye!")
                process.exit(0);
                return;
            }

            let lexer = new Lexer(line);

            for (let tok = lexer.NextToken(); tok.Type != TokenType.EOF; tok = lexer.NextToken())
                console.log("%+v", tok);

            rl.setPrompt(PROMPT, PROMPT.length);
            rl.prompt();
        });

        rl.setPrompt(PROMPT, PROMPT.length);
        rl.prompt();
    }
}

