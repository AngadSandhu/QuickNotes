const fs = require("fs");
const chalk = require("chalk");
const { info } = require("console");

const warningText = function (text) {
    return chalk.red.bold(text)
}

const successText = function(text) {
    return chalk.blue.bold(text);
}

const infoText = function(text) {
    return chalk.green.bold(text);
}

const loadNotes  = function() {
    try{
        const bufferData = fs.readFileSync("./notes.json");
        const bufferToJSON = JSON.parse(bufferData.toString());
        return bufferToJSON;
    } catch(e) {
        console.log("An error occured while loading notes", e);
        return [];
    }
}

const getNoteDetails = function(name){
    const notes= loadNotes();
    const noteDetails = notes.find((note)=>note.title===name);
    if(noteDetails) {
        console.log(infoText("Following are the note details :-"));
        console.log(infoText("Title: "+ noteDetails.title+ ", Content: "+ noteDetails.content));
    } else {
        console.log(warningText("Note Details not found !"));
    }
}

const listNotes = function() {
    const notes= loadNotes();
    console.log(chalk.green("Following is the list of notes"));
    notes.forEach(note=>{
        console.log(infoText(note.title))
    })
}

const saveNotes = function(notes){
    let stringifiedNotes =  JSON.stringify(notes);
    fs.writeFileSync("./notes.json",stringifiedNotes);
}

const addNote = function(title,content) {
    let newNote = {title,content};
    let notes = loadNotes();
    const checkDuplicates  = notes.find(note=>note.title ===title);
    if(checkDuplicates){
        console.log(warningText("A note with the same title aleady exists, please add a new note with fresh contents & title"));
        return ;
    } else {
        notes.push(newNote);
        saveNotes(notes); 
        console.log(successText("Note Added Successfully !"));
    }
}

const removeNote = function(title) {
    let notes = loadNotes();
    let newNotes = notes.filter((note,index)=>note.title!==title);
    if(newNotes.length===notes.length){
        console.log(warningText("The note does not exists !"));
        return;
    } else {
        saveNotes(newNotes);
        console.log(successText("Note Deleted Successfully !"))
    }
}



module.exports  = { addNote, removeNote, getNoteDetails, listNotes};