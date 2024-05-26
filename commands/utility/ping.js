const {
    Client,
    Message,
    String,
    PermissionFlagsBits,
    EmbedBuilder
} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Check Bots ping',
    Required_Permissions: 'ADMINISTRATOR',
    status: 'Working',
    hidden: "true",
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
    run: async (client, message, args) => {

        if (!message.member.permissions.has(PermissionFlagsBits.Administrator) && !message.author.id === '574217755692236803') return message.delete()

        const embed = new EmbedBuilder()
            .setColor('Red')
            .setDescription(`**Client's Ping**: \` ${client.ws.ping}ms \`\n**Message Ping**: \` ${Date.now() - message.createdTimestamp}ms\``)

        message.reply({
            content: 'Pong',
            embeds: [embed],
        })
    }
}