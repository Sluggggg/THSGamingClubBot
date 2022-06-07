//const { ILLEGAL } = require("./other/illegalWords.js");

module.exports = {
    name: 'messageCreate',
    once: true,
    async execute (message) {
        if (message.author.bot) return;

        if (message.content.toLowerCase().includes(ILLEGAL)) {
            message.delete();
        }
    }
}