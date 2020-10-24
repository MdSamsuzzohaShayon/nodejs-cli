const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const {isRequired} = require('../utils/validations');


const key = {
    async set(){
        // console.log("Hello from set method");
        const keyManager = new KeyManager();
        // GET KEY FROM USER INPUT USING INQUIRER
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: "Enter API key ".green + "https//nomics.com".gray,
                validate: isRequired
            }
        ]);
        const key = keyManager.setKey(input.key);
        if(key){
            console.log("API key set".blue);
        }
    },
    show(){
        console.log("Hello from show method");
    },
    remove(){
        console.log("Hello from remove method");
    }
}


module.exports = key;