import * as util from "util"
import { REPL } from "./REPL"

    let user = require("os").userInfo().username;
    if (!user)
        throw new Error("Unable to get current user name.");

    console.log("Hello %s! This is the Monkey programming language!", user.Username);
    console.log("Feel free to type in commands.");
    
    REPL.start(process);