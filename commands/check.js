const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const check = {
    async price(cmd) {
        try {
            keyManager = new KeyManager();
            const key = keyManager.getKey();
            // console.log("key: ", key);

            const api = new CryptoAPI(key);
            // console.log("API: ", api);
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);
            console.log(priceOutputData);
        } catch (err) {
            console.error(err.message.red);
        }
    }
}


module.exports = check;