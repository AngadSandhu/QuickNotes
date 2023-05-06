const yargs = require("yargs");
const chalk = require("chalk");
const getNotes = require("./utils/notesUtils.js");

const commandArg = process.argv[2];

console.log(chalk.blue.bold(commandArg));

// adding yargs custom commands
// Read, Save, Remove Notes

yargs.command({
    command: "add",
    describe: "command for adding a new note",
    handler: function() {
        console.log("Adding a note..");
    }
});

yargs.command({
    command: "remove",
    describe: "command for removing a note",
    handler: function(){
        console.log("Removing the note...");
    }
});

yargs.command({
    command: "read",
    describe: "command for reading a note",
    handler: function() {
        console.log("Reading a note...");
    }
})

yargs.comand({
    command: "read",
    describe: "command for reading notes",
    handler: function(){
        console.log("Reading the note");
    }
})
console.log("Yargs Arguments", yargs.argv);