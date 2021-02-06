const fs = require("fs");

const getNotes = function () {
  return "Your notes ...";
};

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

const saveNotes = function (notes) {
  // Taking notes array and saving it as JSON
  const notesJSON = JSON.stringify(notes);

  //writing JSON object to file
  fs.writeFileSync("notes.json", notesJSON);
};

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
  getNotes: getNotes,
  addNote: addNote,
};
