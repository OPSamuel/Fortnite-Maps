require("dotenv").config();
const client = require("../index");
const {EmbedBuilder, Message, REST, Routes, PermissionsBitField} = require('discord.js');
const token = process.env.TOKEN;
const blacklist = require("../Schemas/Blacklist")
const ms = require("ms")
const loading = '<a:LOADING:1005647558087016448>'
const fs = require("fs")
const systems = require("../Schemas/Systems");

client.on("messageCreate", async (message) => {

    if(message.content.toLowerCase() === `fm!admin ping`) {
        //if (!client.guilds.cache.get('1031306940564910260').members.cache.get(message.author.id).roles.cache.has('1047189599820189747')) return;
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.delete();

        const logchannel = client.channels.cache.get('')//Enter your log channel ID

            const {dependencies} = require('../package.json');
            const ver = dependencies['discord.js']
            const tick = '<a:TICK:995018408737374308>' //A tick emoji ID thingy
            const pingembed = new EmbedBuilder()
            .setColor("Green")
            .setTitle(`${tick} Pong!`)
            .addFields(
                {name: "Response Time", value: `${client.ws.ping} ms`},
                {name: "Shard", value: `0`},
                {name: "Running on:", value: `${process.platform}\n${process.arch}`},
                {name: "Memory", value: `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`},
                {name: "RSS", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`},
            )
            .setFooter({text: `Invoked by ${message.author.tag}`})
            message.channel.send({embeds: [pingembed]})

            const summarylog = new EmbedBuilder()
            .setTitle("Admin Command Used")
            .addFields(
                {name: "Command:", value: `\`fm!admin ping\``},
                {name: "User:", value: `<@${message.author.id}> | ${message.author.tag}`},
                {name: "Guild:", value: `${message.guild.name} | ${message.guild.id}`},
            )
            .setTimestamp()
            logchannel.send({embeds: [summarylog]})
    }
    if(message.content.toLowerCase() === `fm!admin summary`) {

    //if (!client.guilds.cache.get('1031306940564910260').members.cache.get(message.author.id).roles.cache.has('1047189599820189747')) return;
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.delete();
        setTimeout(function () {
            message.delete()
            }, ms('10s'));

        const logchannel = client.channels.cache.get('') //Enter your log channel ID
        const membercount = message.guild.memberCount
        const rolecount = message.guild.roles.cache.size
        const tick = '<a:TICK:995018408737374308>' //A tick emoji ID thingy

        const summary = new EmbedBuilder()

    
        .setTitle(`${tick} **Summary of ${message.guild.name}**`)
        .setThumbnail(message.guild.iconURL({dynamic: true}))
        .addFields(
            {name: 'Member Count', value: `${membercount}`},
            {name: '**Role Count**', value: `${rolecount}`},
            {name: '**Bot\'s Permissions**', value: `\`${message.guild.members.me.permissions.toArray().join(", ")}\``},
            {name: '**Auto Moderation System**', value: `\n\`Disabled\``},
            {name: '**Auto Moderation [Bulk-Messages]**', value: `\n\`Disabled\``},
            {name: '**Auto Moderation [Mass-Mention]**', value: `\n\`Disabled\``},
            {name: '**Auto Moderation [Line-Spam]**', value: `\n\`Disabled\``},
            {name: '**Auto Moderation [Link-Prevention]**', value: `\n\`Disabled\``},
            {name: '**Auto Moderation [Anti-Swear]**', value: `\n\`Disabled\``},
            {name: '**Working Commands**', value: `\nAll`, inline: true},
            {name: '**Maintenance Commands**', value: `\nNone`, inline: true},
            {name: '**Total Commands**', value: `\n${client.commands.size + client.SlashCommands.size}`, inline: true},
            {name: '**Administrator Commands**', value: `\n\`ping\` - ${tick}\n\`summary\` - ${tick}\n\`enable commands\` - ${tick}\n\`enable slashcommands\` - ${tick}\n\`disable commands\` - ${tick}\n\`disable slashcommands\` - ${tick}\n\`view\` - ${tick}`},
        )
        .setFooter({text: `This message with auto delete after 60 seconds.`})
        .setTimestamp()

        const summarylog = new EmbedBuilder()
        .setTitle("Admin Command Used")
        .addFields(
            {name: "Command:", value: `\`fm!admin summary\``},
            {name: "User:", value: `<@${message.author.id}> | ${message.author.tag}`},
            {name: "Guild:", value: `${message.guild.name} | ${message.guild.id}`},
        )
        .setTimestamp()
        logchannel.send({embeds: [summarylog]})
    
        const Message = await message.channel.send({embeds: [summary]})
        setTimeout(function () {
        Message.delete()
            }, ms('60s'));
    }
    if(message.content.toLowerCase() === 'fm!admin perms'){
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.delete();

        const logchannel = client.channels.cache.get('')  //Enter your log channel ID

        setTimeout(function () {
            message.delete()
            }, ms('10s'));

        ('**Bot\'s Permissions**', `\`${message.guild.me.permissions.toArray().join(", ")}\``)

        const Message = await message.channel.send({content: `I have the follow permissions: \`${message.guild.me.permissions.toArray().join(", ")}\``})

        const summarylog = new EmbedBuilder()
        .setTitle("Admin Command Used")
        .addFields(
            {name: "Command:", value: `\`fm!admin perm\``},
            {name: "User:", value: `<@${message.author.id}> | ${message.author.tag}`},
            {name: "Guild:", value: `${message.guild.name} | ${message.guild.id}`},
        )
        .setTimestamp()
        logchannel.send({embeds: [summarylog]})


        setTimeout(function () {
            Message.delete()
                }, ms('20s'));
    }
    if(message.content.toLowerCase() === 'fm!admin enable commands'){

        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.delete();

        const logchannel = client.channels.cache.get('') //Enter your log channel ID

        setTimeout(function () {
            message.delete()
                }, ms('10s'));

        const systems = require("../Schemas/Systems");
            systems.findOneAndUpdate({Guild_Name: message.guild.name, Guild_ID: message.guild.id, Commands: true}).catch(err => console.log(err))
            const systemsenabledembed = new EmbedBuilder()
            .setTitle("Admin Menu")
            .setDescription("I have successfully enabled all of my Message Commands.")
            .addFields({name: "Commands", value: `Changed value to true`}, )
            .setFooter({text: `This message with auto delete after 20 seconds.`})

            const Message = await message.channel.send({embeds: [systemsenabledembed]})

            const summarylog = new EmbedBuilder()
            .setTitle("Admin Command Used")
            .addFields(
                {name: "Command:", value: `\`fm!admin enable commands\``},
                {name: "User:", value: `<@${message.author.id}> | ${message.author.tag}`},
                {name: "Guild:", value: `${message.guild.name} | ${message.guild.id}`},
            )
            .setTimestamp()
            logchannel.send({embeds: [summarylog]})

            setTimeout(function () {
            Message.delete()
                }, ms('20s'));
    }
    if(message.content.toLowerCase() === 'fm!admin enable slashcommands'){
                
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.delete();

        const logchannel = client.channels.cache.get('') //Enter your log channel ID

        setTimeout(function () {
            message.delete()
            }, ms('10s'));

        const systems = require("../Schemas/Systems");
        systems.findOneAndUpdate({Guild_Name: message.guild.name, Guild_ID: message.guild.id, SlashCommands: true}).catch(err => console.log(err))
        const systemsenabledembed = new EmbedBuilder()
        .setTitle("Admin Menu")
        .setDescription("I have successfully enabled all of my Slash Commands.")
        .addFields({name: "Commands", value: `Changed value to true`}, )
        .setFooter({text: `This message with auto delete after 20 seconds.`})
        const Message = await message.channel.send({embeds: [systemsenabledembed]})

        const summarylog = new EmbedBuilder()
        .setTitle("Admin Command Used")
        .addFields(
            {name: "Command:", value: `\`fm!admin enable slashcommands\``},
            {name: "User:", value: `<@${message.author.id}> | ${message.author.tag}`},
            {name: "Guild:", value: `${message.guild.name} | ${message.guild.id}`},
        )
        .setTimestamp()
        logchannel.send({embeds: [summarylog]})

        setTimeout(function () {
        Message.delete()
            }, ms('20s'));
    }
    if(message.content.toLowerCase() === 'fm!admin disable commands'){
                
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.delete();

        const logchannel = client.channels.cache.get('') //Enter your log channel ID

        setTimeout(function () {
            message.delete()
            }, ms('10s'));

        const systems = require("../Schemas/Systems");
        systems.findOneAndUpdate({Guild_Name: message.guild.name, Guild_ID: message.guild.id, Commands: false}).catch(err => console.log(err))
        const systemsenabledembed = new EmbedBuilder()
        .setTitle("Admin Menu")
        .setDescription("I have successfully disabled all of my Message Commands.")
        .addFields({name: "Commands", value: `Changed value to false`}, )
        .setFooter({text: `This message with auto delete after 20 seconds.`})

        const Message = await message.channel.send({embeds: [systemsenabledembed]})

        const summarylog = new EmbedBuilder()
        .setTitle("Admin Command Used")
        .addFields(
            {name: "Command:", value: `\`fm!admin disable commands\``},
            {name: "User:", value: `<@${message.author.id}> | ${message.author.tag}`},
            {name: "Guild:", value: `${message.guild.name} | ${message.guild.id}`},
        )
        .setTimestamp()
        logchannel.send({embeds: [summarylog]})

        setTimeout(function () {
        Message.delete()
            }, ms('20s'));
    }
    if(message.content.toLowerCase() === 'fm!admin disable slashcommands'){

        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.delete();

        const logchannel = client.channels.cache.get('')  //Enter your log channel ID

        setTimeout(function () {
            message.delete()
            }, ms('10s'));

        const systems = require("../Schemas/Systems");
        systems.findOneAndUpdate({Guild_Name: message.guild.name, Guild_ID: message.guild.id, SlashCommands: false}).catch(err => console.log(err))
        const systemsenabledembed = new EmbedBuilder()
        .setTitle("Admin Menu")
        .setDescription("I have successfully disabled all of my Slash Commands.")
        .addFields({name: "Commands", value: `Changed value to false`}, )
        .setFooter({text: `This message with auto delete after 20 seconds.`})

        const Message = await message.channel.send({embeds: [systemsenabledembed]})

        const summarylog = new EmbedBuilder()
        .setTitle("Admin Command Used")
        .addFields(
            {name: "Command:", value: `\`fm!admin disable slashcommands\``},
            {name: "User:", value: `<@${message.author.id}> | ${message.author.tag}`},
            {name: "Guild:", value: `${message.guild.name} | ${message.guild.id}`},
        )
        .setTimestamp()
        logchannel.send({embeds: [summarylog]})

        setTimeout(function () {
        Message.delete()
            }, ms('20s'));
    }
    if(message.content.toLowerCase() === 'fm!admin view'){

        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.delete();

        const logchannel = client.channels.cache.get('')  //Enter your log channel ID


        setTimeout(function () {
            message.delete()
            }, ms('10s'));

        const systems = require("../Schemas/Systems");
        systems.findOne({Guild_ID: message.guild.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                const systemsenabledembed = new EmbedBuilder()
                .setTitle("Admin Menu")
                .addFields(
                    {name: "Guild Name", value: `${data.Guild_Name}`},
                    {name: "Guild ID", value: `${data.Guild_ID}`},
                    {name: "Commands ", value: `${data.Commands}`},
                    {name: "Slash Commands", value: `${data.SlashCommands}`},
                    {name: "User Whitelist", value: `<@!${data.UserWhitelist}>`},
                )
                .setFooter({text: `This message with auto delete after 60 seconds.`})

                const Message = await message.channel.send({embeds: [systemsenabledembed]})

                const summarylog = new EmbedBuilder()
                .setTitle("Admin Command Used")
                .addFields(
                    {name: "Command:", value: `\`fm!admin view\``},
                    {name: "User:", value: `<@${message.author.id}> | ${message.author.tag}`},
                    {name: "Guild:", value: `${message.guild.name} | ${message.guild.id}`},
                )
                .setTimestamp()
                logchannel.send({embeds: [summarylog]})


                setTimeout(function () {
                Message.delete()
                    }, ms('60s'));
            }
        })
    }
})
