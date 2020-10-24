const program = require('commander');
const key = require('../commands/key');


// coindex key set
program
    .command("set")
    .description("Set API key -- Get at https://nomics.com")
    // .action(() => console.log("Hello from set"));
    .action(key.set);



// coindex key show
program
    .command("show")
    .description("Show API key")
    // .action(() => console.log("Hello from show"));
    .action(key.show);


// coindex key remove
program
    .command("remove")
    .description("Remove API key")
    // .action(() => console.log("Hello from remove"));
    .action(key.remove);



program.parse(process.argv);