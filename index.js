require("dotenv").config();
const {Collection, Client} = require("discord.js");

const client = new Client({
    allowedMentions: {
        repliedUser: true, 
        intents: 3276799,
        parse: ["users", "roles", "everyone"] 
    },
    intents: 3276799,
});

client.commands = new Collection();
client.aliases = new Collection();
client.SlashCommands = new Collection();

module.exports = client; 

const handler = require('./Handler/handler');
handler(client);

client.login(process.env.TOKEN);
