const Discord = require("discord.js")
const blacklist = require("../../Schemas/Blacklist");

module.exports = {
    name: "blacklist-add",
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
        
        const user = message.mentions.users.first() || message.guild.users.cache.get(args[0]);
        const reason = args.slice(1).join(' ') || "No reason provided.";
        if (!user) return message.reply("Please provide a user")
        if (user.id === message.author.id) {
            return message.reply("You can't blacklist your self!");
          }
        if (!reason) return 

        blacklist.findOne({ Guild_ID: message.guild.id, Staff_ID: message.author.id, Member_ID: user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.reply("The specified user is already blacklisted.")
            } else {
                data = new blacklist({ Guild_Name: message.guild.name, Guild_ID: guild.id, Staff_Name: message.author.tag, Staff_ID: message.author.id, Member_Name: user.tag, Member_ID: user.id, Reason: `${reason}`})
                data.save()
                .catch(err => console.log(err))
                message.reply(`They have been added to the blacklist.`)
            }
        })
    }
} 