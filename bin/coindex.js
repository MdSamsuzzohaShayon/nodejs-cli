#!/usr/bin/env node


const program = require("commander");

// SETTING VERSION AND PARSE AS SO IT WILL ACCESS ALL ARGUMENTS
program.version('1.0.0').parse(process.argv);


console.log("Hello from coindex.js");
// GET ALL INDEX VALUE
console.log(process.argv);
// GET VALUE OF INDEX TWO
console.log(process.argv[2]);
