const fs = require("fs");
const chalk = require("chalk");

const warningText = function (text) {
    return chalk.red.bold(text)
}

const successText = function(text) {
    return chalk.blue.bold(text);
}

const getNotes = function(){
    return "My notes for you ..";
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

const saveNotes = function(notes){
    let stringifiedNotes =  JSON.stringify(notes);
    fs.writeFileSync("./notes.json",stringifiedNotes);
}

const addNote = function(title,content) {
    let newNote = {title,content};
    let notes = loadNotes();
    const checkDuplicates  = notes.filter(note=>note.title ===title);
    if(checkDuplicates.length>0){
        console.log("A note with the same title aleady exists, please add a new note with fresh contents & title");
        return ;
    } else {
        notes.push(newNote);
        saveNotes(notes); 
    }
}

const removeNote = function(title) {
    let notes = loadNotes();
    let newNotes = notes.filter((note,index)=>note.title!==title);
    if(newNotes.length===notes.length){
        console.log(warningText("The note does not exists !"));
        return;
    } else {
        console.log(successText("Note Deleted Successfully !"))
        saveNotes(newNotes);
    }
}



module.exports  = {getNotes, addNote, removeNote};