const {
    Client,
    Message,
    String,
    EmbedBuilder
} = require('discord.js');
const prefix = process.env.PREFIX
const commandchannelid = process.env.COMMANDSCHANNELID;

module.exports = {
    name: 'map-commands',
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
        const mapchannel = client.channels.cache.get('1000667505842458695')

        const maplist = new EmbedBuilder()
        .setColor("#5DE2E7")
        .setTitle("Map Commands")
        .setDescription(`Below are all of the commands avaliable with me!`)
        .addFields(
            {name: "__Information__", value: "The bot's commands are not case sensitive, meaning both uppercase and lowercase characters will work."},
            {name: "__Map Commands__", value: ">v1\n>v2\n>v3\n>v4\n>v5\n>v6\n>v7\n>v8\n>v9\n>v10\n>v11\n>v12\n>v13\n>v14\n>v15\n>v16\n>v17\n>v18\n>v19\n>v20\n>v21\n>v22\n>v23\n>v24\n>v25\n>v26\n>v27\n>v28\n>v29"},
        )
        .setFooter({text: "Bot made by OP SamuelCC • Last Updated At"})
        .setTimestamp()
        mapchannel.send({embeds: [maplist]})
    }
}
