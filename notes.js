const fs = require("fs");
const chalk = require("chalk");

//Adding Note Function
const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New Note Added");
  } else {
    console.log("Note Title already exists");
  }
};

//Removing Notes Function
const removeNote = function (title) {
  const notes = loadNotes();

  //check to see if note title given matches title in notes array
  const notesToSave = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToSave.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(notesToSave);
  } 
  else {
    console.log(chalk.green.inverse("No note found!"));
  }
};

// Saving Note Function
const saveNotes = function (notes) {
  // Taking notes array and saving it as JSON
  const notesJSON = JSON.stringify(notes);

  //writing JSON object to file
  fs.writeFileSync("notes.json", notesJSON);
};

//Loading Notes Function
const loadNotes = function () {
  try {
    const fileBuffer = fs.readFileSync("notes.json");

    const bufferJSON = fileBuffer.toString();
    return JSON.parse(bufferJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
};
