const client = require("../index");
const {owners} = require('../json/owners.json');
const prefix = process.env.PREFIX;
const {EmbedBuilder, Message, PermissionFlagsBits, Embed, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType} = require("discord.js");
const { replaceResultTransformer } = require("common-tags");
const emoji = '<:xmark:1044634264416817292>';
const ownerid = process.env.OWNERID
const ms = require("ms")

client.on('messageCreate', (message) => {

    //if(message.mentions.has(client.user)) {
        //const embed = new EmbedBuilder()
        //.setColor(message.guild.me.displayColor)
        //.setAuthor({ iconURL: client.user.displayAvatarURL({dynamic: true}), name: `${client.user.username}`})
        //.setDescription("Hey I am Fortnite Maps, a Fortnite Maps Bot, created by \`OP SamuelCC#9918\`! My prefix is \`>\`. I support slash commands, do \`/\` to see all my slash commands.\n\n")
        //message.reply({embeds: [embed]})
    //}
    if (message.author.bot || !message.content.toLowerCase().startsWith(prefix)) return;
    if(message.channel.type === 'DM') return;
    
const blacklist = require("../Schemas/Blacklist");
    blacklist.findOne({Member_ID: message.author.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            const systems = require("../Schemas/Systems");
            systems.findOne({Guild_Name: message.guild.name, Guild_ID: message.guild.id}, async(err, sysdata) => {
        if(err) throw err;
        //if(!sysdata) {systems.create({Guild_Name: message.guild.name, Guild_ID: message.guild.id, Commands: false, SlashCommands: false, UserWhitelist: 0})}
        if(sysdata.Commands === true && message.author.id !== sysdata.UserWhitelist) {
            const args = message.content.slice(prefix.length).trim().split(" ");
            const cmd = args.shift().toLowerCase();
            const command = client.commands.get(cmd) || client.commands.find(c => c.aliases?.includes(cmd));
            const prefixcontent = message.content.slice(1).split(" ")
            const prefixcontent1 = prefixcontent.shift()

            nocommandembed = new EmbedBuilder()
            .setColor("Red")
            .setTitle("Command Not Found")
            .setDescription(`The following command \`${message.content}\` is not recognised. Have you checked <#1000667505842458695>?\n\n**__Suggested Command__** (This may not be a command)\n\n\`${prefix}v${prefixcontent1}\``)
            .setTimestamp()
            if (!command) return message.reply({embeds: [nocommandembed]})
            if (command) {
                if(!message.member.permissions.has(PermissionFlagsBits.Administrator)) {

                } else {
                if (!message.member.permissions.has(command.User_Permissions || [])) return;
                }
                // Under Maintenance Commands
                if (command.maintenance) {
                    if (!owners.includes(message.user.id)) {
                        const maintenancembed = new EmbedBuilder()
                        .setColor("Red")
                        .setDescription(`${emoji} This command is on maintenance please try later`)
                        return message.reply({ 
                            embeds: [maintenancembed],
                        })
                    }
                }
        
                // Bot Permissions Check
                    if (!message.guild.members.me.permissions.has(command.Bot_Permissions || [])) {
                        if (!message.guild.members.me.permissions.has('ADMINISTRATOR')) return;
                    const permsembed = new EmbedBuilder()
                    .setColor("Red")
                    .setDescription(`${emoji} I am missing the permission \`${command.Bot_Permissions || []}\``)
                        return message.reply({
                            embeds: [permsembed],
                        });
                    }
        
                // Owner Only Commands
                if (command.ownerOnly) {
                    if (!owners.includes(message.author.id)) {
                        return;
                    }
                };
                try {
                await command.run(client, message, args)
                } catch(error) {

                    //Error flagging system
                    var guild = message.guild;
                    var member = message.member;
                    var channel = message.channel;
                    var errorTime = `<t:${Math.floor(Date.now() / 1000)}:R>`;

                    const errorchannel = await client.channels.cache.get('1219677449520943154')

                    const embed = new EmbedBuilder()
                    .setColor("Blurple")
                    .setDescription("An error has been flagged while using a message command. All other forms of message commands will not be logged with this system.")
                    .addFields(
                        {name: "Error Command", value : `\`${cmd}\``},
                        {name: "Error Stack", value : `\`${error.stack}\``},
                        {name: "Error Message", value : `\`${error.message}\``},
                        {name: "Error Timestamp", value : `${errorTime}`},
                        )
                        .setFooter({ text: "Error Flag System"})
                        .setTimestamp()

                        const button = new ButtonBuilder()
                        .setCustomId("fetchErroUserInfo")
                        .setLabel("Fetch User Info")
                        .setStyle(ButtonStyle.Danger);

                        const row = new ActionRowBuilder()
                        .addComponents(
                            button
                        );
                        const errorembed1 = new EmbedBuilder()
                        .setColor("Blurple")
                        .setTitle("Error Information")
                        .setDescription(`An error has been flagged while using the message command. Please see more information below.`)
                        .addFields(
                            {name: "Error Command", value : `\`${cmd}\``},
                            {name: "Error Stack", value : `\`${error.stack}\``},
                            {name: "Error Message", value : `\`${error.message}\``},
                            {name: "Error Timestamp", value : `${errorTime}`},
                            )
                            .setFooter({ text: "Error Flag System"})
                            .setTimestamp()
                        message.reply({embeds: [errorembed1]})

                        const msg = await errorchannel.send({ embeds: [embed], components: [row]}).catch(err => {})



                        var time = 86400000;
                        const collector = await msg.createMessageComponentCollector({
                            ComponentType: ComponentType.Button,
                            time
                        });

                        collector.on('collect', async i => {
                            if (i.customid = 'fetchErroUserInfo') {
                                const userEmbed = new EmbedBuilder()
                                .setColor("Blurple")
                                .setDescription("This user has triggered a message command error while using one of the commands.")
                                .addFields(
                                    {name: "Error Guild", value: `\`${guild.name} | ${guild.id}\``},
                                    {name: "Error User", value: `\`${member.user.username} | ${member.id}\``},
                                    {name: "Error Command Channel", value: `\`${channel.name} | ${channel.id}\``},
                                )
                                .setTimestamp()

                                await i.reply({embeds: [userEmbed], ephemeral: true});
                            }
                        })

                        collector.on('end', async () => {
                            button.setDisabled(true);
                            embed.setFooter({ text: "Error Flag System -- Your user fetch button has expired"});
                            await msg.edit({embeds: [embed], components: [row]})
                        })
                }

                const logchannel = await client.channels.cache.get('1219027901416996884')

                const summarylog = new EmbedBuilder()
                .setTitle("Command Used")
                .addFields(
                    {name: "Command", value: `\`${cmd}\``},
                    {name: "User", value: `<@${message.author.id}> | ${message.author.tag}`},
                    {name: "Guild", value: `${message.guild.name} | ${message.guild.id}`},
                )
                .setTimestamp()
                logchannel.send({embeds: [summarylog]})
            }
        } else {
            const disabledembed = new EmbedBuilder()
            .setTitle("Command Not Executed")
            .setColor("Red")
            .setDescription(`You are unable to execute any message commands at this time. They have been temporarily disabled.`)
            .setFooter({text: "Please let OP SamuelCC know this has occured as this may be an error"})
            .setTimestamp()
           const messagedisabled = await message.reply({embeds: [disabledembed]})
           setTimeout(function () {
            message.delete()
            messagedisabled.delete()
                }, ms('20s'));
        }})
        }else {
            const globallogchannel = process.env.GLOBAL_LOG_CHANNEL;
            const logchannel = client.channels.cache.get(`${globallogchannel}`)
            const embed = new EmbedBuilder()
            .setColor("Red")
            .setTitle("Blacklisted")
            .setDescription("A user tried to interact with me, they are blacklisted, more information below:")
            .addFields(
                {name: `Guild:`, value: `${message.guild.name}`},
                {name: `Guild ID:`, value: `${message.guild.id}`},
                {name: `Blacklist Reason:`, value: `${data.Reason}`},    
                {name: `Blacklisted At:`, value: `${data.Time}`},  
            )
            .setTimestamp()
            const embed1 = new EmbedBuilder()
            .setColor("Red")
            .setTitle("Blacklisted")
            .setDescription("You are blacklisted from using me:")
            .addFields(
                {name: `User:`, value: `${message.author.tag}`},
                {name: `User ID:`, value: `${message.author.id}`},
                {name: `Blacklist Reason:`, value: `${data.Reason}`},    
                {name: `Blacklisted At:`, value: `${data.Time}`},    
            )
            .setTimestamp()
                logchannel.send({embeds: [embed]})
                message.author.send({embeds: [embed1]})
        }
    })
});
