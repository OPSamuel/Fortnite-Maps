const {
    Client,
    Message,
    String,
    EmbedBuilder
} = require('discord.js');
const prefix = process.env.PREFIX

module.exports = {
    name: 'commands',
    description: 'Shows all the commands for the bot',
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

        if(!message.member.permissions.has('ADMINISTRATOR') && !message.author.id !== '574217755692236803') return message.delete() 

        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle("Commands")
            .setDescription(`
            **__Chapter 1__**

            \`${prefix}chapter1season1\` Aliases - c1s1 
            \`${prefix}chapter1season2\` Aliases - c1s2 
            \`${prefix}chapter1season3\` Aliases - c1s3 
            \`${prefix}chapter1season4\` Aliases - c1s4 
            \`${prefix}chapter1season5\` Aliases - c1s5 
            \`${prefix}chapter1season6\` Aliases - c1s6 
            \`${prefix}chapter1season7\` Aliases - c1s7
            \`${prefix}chapter1season8\` Aliases - c1s8
            \`${prefix}chapter1season9\` Aliases - c1s9
            \`${prefix}chapter1season10\` Aliases - c1s10 

            **__Chapter 2__**

            \`${prefix}chapter2season1\` Aliases - c2s1 
            \`${prefix}chapter2season2\` Aliases - c2s2 
            \`${prefix}chapter2season3\` Aliases - c2s3 
            \`${prefix}chapter2season4\` Aliases - c2s4 
            \`${prefix}chapter2season5\` Aliases - c2s5 
            \`${prefix}chapter2season6\` Aliases - c2s6 
            \`${prefix}chapter2season7\` Aliases - c2s7 
            \`${prefix}chapter2season8\` Aliases - c2s8 

            **__Chapter 3__**

            \`${prefix}chapter3season1\` Aliases - c3s1 
            \`${prefix}chapter3season2\` Aliases - c3s2 
            \`${prefix}chapter3season3\` Aliases - c3s3  
            
            **__Reality POI'S__** 

            \`${prefix}logjamwestern\`
            \`${prefix}logjamcolosseum\`
            \`${prefix}logjampirate\`
            \`${prefix}sleepywestern\`
            \`${prefix}sleepycolosseum\`
            \`${prefix}sleepyneo\`
            \`${prefix}sleepyatlantis\`
            \`${prefix}butteratlantis\`
            \`${prefix}butterneo\`
            \`${prefix}buttercolosseum\`

            **__Lava/Snow__**

            \`${prefix}chapter1season7snow\`
            \`${prefix}chapter2season5snow1\`
            \`${prefix}chapter2season5snow2\`
            \`${prefix}chapter1lava\`
            \`${prefix}chapter2lava\`
            \`${prefix}volcanoevent\`

            **__Water Stages__**

            \`${prefix}water1\` - Aliases - w1
            \`${prefix}water2\` - Aliases - w2
            \`${prefix}water3\` - Aliases - w3
            \`${prefix}water4\` - Aliases - w4
            \`${prefix}water5\` - Aliases - w5
            \`${prefix}water6\` - Aliases - w6
            \`${prefix}water7\` - Aliases - w6

            **__Corruption Stages__**

            \`${prefix}corruption1\`
            \`${prefix}corruption2\`
            \`${prefix}corruption3\`

            **__Other__**

            \`${prefix}greenprimal\`
            \`${prefix}chapter1empty\`
            \`${prefix}chapter2empty \`
            \`${prefix}chapter3empty\`
            \`${prefix}chapter3nodesert\`
            \`${prefix}chapter3nosnow\`
            \`${prefix}partyroyale\`
            `)

        message.channel.send({
            embeds: [embed],
        })
    }
}