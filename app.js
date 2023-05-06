const yargs = require("yargs");
const chalk = require("chalk");
const getNotes = require("./utils/notesUtils.js");
const { string } = require("yargs");

const commandArg = process.argv[2];

console.log(chalk.blue.bold(commandArg));

// adding yargs custom commands
// Read, Save, Remove Notes

yargs.command({
    command: "add",
    describe: "command for adding a new note",
    builder: {                       // builder config is used for adding the custom command
        title: {                     // name of the custom property/command that user gives during runtime 
            describe: "note title",  // description of the custom command arg during --help
            demandOption: true,       // wether the ccommand is required at runtime or not
            type: string
        },
        content: {
            describe:  "note content",
            demandOption: false
        }
    },
    handler: function(argv) {
        console.log("Adding a note..",argv);
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

yargs.command({
    command: "read",
    describe: "command for reading notes",
    handler: function(){
        console.log("Reading the note");
    }
})

yargs.parse();  // This is REQUIRED to parse all the custom arguments being passed down by the user 
//console.log("Yargs Arguments", yargs.argv);