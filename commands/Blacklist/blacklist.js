const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "blacklist",
    description: "",
    Required_Permissions: 'ADMINISRATOR, BOT OWNER',
    status: "Working",
    hidden: "true",

        /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */

    run: async(client, message, args) => {

        if(message.author.id !== '574217755692236803') return message.delete();

        const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("Command Usage")
        .addFields(
            {name: "Blacklist Add", value: `>blacklist-add @user/id [reason]`},
            {name: "Blacklist Remove", value: `>blacklist-remove @user/id`},
            {name: "Blacklist Information", value: `>blacklist-info @user/id`},
        )

        message.reply({embeds: [embed]})
    }
}