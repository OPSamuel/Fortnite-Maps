const {Client, Message, EmbedBuilder} = require('discord.js');
const { ifft } = require('mathjs');
const ms = require("ms")

module.exports = {
    name: 'slowmode',
    description: 'Bans a user from the server',
    aliases: 'sm',
    User_Permissions: 'MANAGE_MESSAGES',
    Bot_Permissions: 'MANAGE_MESSAGES',
    status: "Working",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        const noperms = new EmbedBuilder()
        .setColor("Yellow")
        .setTitle("Missing Permissions")
        .setDescription("You are missing the permission \`MANAGE_MESSAGES\` which is needed to execute this command.")
        if(!message.member.permissions.has('MANAGE_MESSAGES') && message.author.id !== '574217755692236803') return message.reply({embeds: [noperms]});
        if(!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.reply({content: `Successfully remove the slowmode.`})
        }
        const raw = args[0];
        const milliseconds = ms(raw)

        if(isNaN(milliseconds)) return message.reply({content: `Please use a valid time.`});

        if(milliseconds < 1000) return message.reply({content: `The minimum slowmode is 1 second.`});

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        message.reply({content: `Slowmode set to ${ms(milliseconds, {long: true,})}`})
    }
}