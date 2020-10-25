const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validations');


const key = {
    async set() {
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
        if (key) {
            console.log("API key set".blue);
        }
    },
    show() {
        // console.log("Hello from show method");
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log("Current API Key: ", key.yellow);
            return key;
        } catch (err) {
            console.error(err.message.red);
        }
    },
    remove() {
        // console.log("Hello from remove method");
        try {
            const keyManager = new KeyManager();
            const key = keyManager.deleteKey();
            console.log("Key is been removed".blue);
            return key;
        } catch (err) {
            console.error(err.message.red);
        }
    }
}


module.exports = key;