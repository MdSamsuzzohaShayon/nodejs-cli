#!/usr/bin/env node
// https://docs.npmjs.com/files/package.json#bin
// THIS LINE WHOULD BE AT THE VERY TOP 


// API KEY = 8f0fd331553b5a398a6f608c4fa9af69


const program = require("commander");

const pkg  = require('../package.json');

// SETTING VERSION AND PARSE AS SO IT WILL ACCESS ALL ARGUMENTS
// program.version('1.0.0').parse(process.argv);
// SETTING VERSION FROM PACKAGE.JSON
program
    .version(pkg.version)
    .command('key', "Manage API key -- https://nomics.com") // TOP LAVEL COMMANDS
    .command('check', 'Check coin price info')
    .parse(process.argv);


// console.log("Hello from coindex.js");
// GET ALL INDEX VALUE
// console.log(process.argv);
// GET VALUE OF INDEX TWO
// console.log(process.argv[2]);
