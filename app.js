const validator  = require("validator");
const chalk = require("chalk");
const getNotes = require("./utils/notesUtils");

const blueText = function(text) {
    return chalk.blue(text);
}

const redText = function(text) {
    return chalk.red(text);
}


console.log(getNotes());
console.log(validator.isEmail("abc@abc")? blueText("Valid Email !!"): redText("WRONGO!"));