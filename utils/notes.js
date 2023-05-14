const fs = require("fs");

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
    notes.push(newNote);
    saveNotes(notes);
}



module.exports  = {getNotes, addNote};