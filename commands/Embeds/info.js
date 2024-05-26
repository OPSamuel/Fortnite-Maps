const {
    Client,
    Message,
    String,
    EmbedBuilder
} = require('discord.js');
const prefix = process.env.PREFIX
const commandchannelid = process.env.COMMANDSCHANNELID;

module.exports = {
    name: 'info',
    description: '',
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

        if(message.author.id !== '574217755692236803') return message.delete() 

        const maplist = new EmbedBuilder()
        .setColor("#00F4FF")
        .setTitle("What is Fortnite Maps")
        .setDescription(`Fortnite Maps is a multi-functional discord bot created by <@574217755692236803>, its main purpose is supplying users with fortnite map versions over in <#${commandchannelid}>, however I can also be used for loads of other features.`)
        .addFields(
            {name: "__Bot Information__", value: "- Created <t:1657175160:F>\n- Coded in Discord.js\n- Fully functional database\n- Hosted 27/4\n- Executed over 1500 commands\n- Created custom for Rahpz's server"},
            {name: "__My Systems [Auto Moderation]__", value:"- Bulk-Messages\n- Mass-Mention\n- Line-Spam\n- Link-Prevention\n- Anti-Swear\n- Filter"},
            {name: "__My systems [General]__", value: "- Moderation\n- Ticket-System"},
            {name: "__My systems [Logging]__", value: "- Member Risk Logging\n- Message-Delete\n- Message-Update"},
            {name: "__Frequently Asked Questions__", value: "**Is Fortnite Maps a public bot?**\nNo currently it is not.\n**Can Samuel make me a custom discord bot?**\nI can but it wont be free unfortunately.\n**How long did it take to code Fortnite Maps?**\nAround 1-2 weeks.\n**What made Samuel get into coding discord bots?**\nI was bored during lockdown so i started to make them, and I haven't stopped since.\n**Does Samuel have any other bots?**\nNope, currently I only have Fortnite Maps."},
        )
        .setFooter({text: "Bot made by OP SamuelCC 💗"})
        .setTimestamp()
        message.channel.send({embeds: [maplist]})
    }
}
