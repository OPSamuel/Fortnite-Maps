const {Client, Message, EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'servers',
    description: 'Check how many server i am in',
    User_Permissions: 'MANAGE_MESSAGES',
    Bot_Permissions: 'SEND_MESSAGES',
    status: "Working",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.reply({content: `Currently in ${client.guilds.cache.size} servers!`})
    }
}