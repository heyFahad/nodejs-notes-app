const yargs = require('yargs');
const notes = require('./notes.js');

//
// Goal: Refactor all functions
//
// 1. If function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work!

// Customize yargs version
yargs.version('1.1.0');

//
// Challenge: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//
// Challenge 1: Setup command option and function
//
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//
// Challenge: Add two new commands
//
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output

//
// Goal: Wire up list command
// 1. Create and export listNotes from notes.js
//  - "Your notes" using chalk
//  - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work!

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    notes.listNotes();
  }
});

//
// Goal: Wire up read command
//
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//  - Search for note by title
//  - Find note and print title (styled) and body (plain)
//  - No note found? Print error in red.
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
