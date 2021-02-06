const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read a new note",
  handler: function () {
    console.log("Reading a new note");
  },
});

//create remove command
yargs.command({
  command: "list",
  describe: "List a new note",
  handler: function () {
    console.log("Listing the notes");
  },
});

// add, remove, read, list
yargs.parse();
