const chalk = require("chalk");
const getNotes = require("./utils/notesUtils.js");

const commandArg = process.argv[2];

console.log(chalk.blue.bold(commandArg));