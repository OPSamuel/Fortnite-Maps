const {Client, Message, EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'membercount',
    description: 'Check the membercount of the server.',
    User_Permissions: 'MANAGE_MESSAGES',
    Bot_Permissions: 'SEND_MESSAGES',
    status: "Working",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.reply({content: `This guild is currently on ${message.guild.members.cache.size} members`})
    }
}