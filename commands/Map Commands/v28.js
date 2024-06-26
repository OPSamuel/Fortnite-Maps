const {EmbedBuilder, Message, PermissionFlagsBits, Embed, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType} = require("discord.js");
const ID = process.env.COMMANDSCHANNELID

module.exports = {
    name: 'v28',
    aliases: '', 
    Required_Permissions: 'None',
    status: "Working",
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
    run: async (client, message, args, Discord) => {
    const user = message.author.id

    if (message.channel.id !== `${ID}`) return message.channel.send(`Whoops! <@${user}>, that command wont work here. Please use <#${ID}>`).then((myMessage) => setTimeout(() => myMessage.delete(), 30000)) && message.delete();


    const button = new ButtonBuilder()
    .setCustomId("v28")
    .setLabel("Version 28 Maps")
    .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder().addComponents(button);
    message.reply({components: [row]})

    }
}