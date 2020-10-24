const program = require('commander');



// coindex key set
program
    .command("set")
    .description("Set API key -- Get at https://nomics.com")
    .action(() => console.log("Hello from set"));


// coindex key show
program
    .command("show")
    .description("Show API key")
    .action(() => console.log("Hello from show"));


// coindex key remove
program
    .command("remove")
    .description("Remove API key")
    .action(() => console.log("Hello from remove"));


program.parse(process.argv);