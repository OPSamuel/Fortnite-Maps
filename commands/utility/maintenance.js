const {Client, Message, String,EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'maintenance',
    description: 'Sends a message about maintenance',
    Required_Permissions: 'ADMINISRATOR',
    status: "Working",
    hidden: "true",
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
    run: async (client, message, args) => {

        //if (!message.author.id === '574217755692236803') return message.delete()
        const mainchannel = message.guild.channels.cache.find(c => c.name === '📜┇command-list')
        const mainchannel1 = message.guild.channels.cache.find(c => c.name === '🥨┇map-commands')

        const reason = args.splice(0).join(" ") || "No reason provided.";


        const embed = new EmbedBuilder()
            .setColor('Red')
            .setTitle("Scheduled Bot Maintainence.")
            .setDescription(`
            <@!994504651565183007> will be unavaliable for a certain time period.

            **__Reason:__**
            
            ${reason}
            `)
            .setTimestamp()

            mainchannel.send({embeds: [embed]})
            mainchannel1.send({embeds: [embed]})
    }
}