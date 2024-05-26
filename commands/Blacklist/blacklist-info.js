const {Discord, EmbedBuilder } = require("discord.js")
const blacklist = require("../../Schemas/Blacklist");

module.exports = {
    name: "blacklist-info",
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

        if(message.author.id !== '574217755692236803') return message.delete() 
        const { guild } = message;
        
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.reply("Please provide a user for me to search for.")

        blacklist.findOne({ Guild_ID: message.guild.id, Member_ID: user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                const blacklistembed = new EmbedBuilder()
                .setColor("Red")
                .setTitle(`Blacklist Information:`)
                .addFields(
                    {name: "Guild", value: `${data.Guild_Name} | ${data.Guild_ID}`},
                    {name: "User", value: `<@${user.id}> | ${user.id}`},
                    {name: "Staff", value: `<@${data.Staff_ID}> | ${data.Staff_ID}`},
                    {name: "Reason", value: `${data.Reason}`},
                )
                message.reply({embeds: [blacklistembed]})
            }else {
                message.reply("No data found for that user.")
            }
        })
    }
} 