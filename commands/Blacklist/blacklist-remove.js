const Discord = require("discord.js")
const blacklist = require("../../Schemas/Blacklist");

module.exports = {
    name: "blacklist-remove",
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

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.reply("Please provide a user")

        blacklist.findOne({Guild_ID: message.guild.id, Staff_ID: message.author.id, Member_ID: user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                await blacklist.findOneAndDelete({Guild_ID: message.guild.id, Staff_ID: message.author.id, Member_ID: user.id})
                .catch(err => console.log(err))
                message.reply(`They have been removed from the blacklist.`)
            } else {
                message.reply(`They are not blacklisted.`)
            }
        })
    }
}