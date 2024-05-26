const chalk = require('chalk'); // Importing chalk from chalk
const prefix = process.env.PREFIX // Getting the Prefix
const client = require("../index"); // Importing Client from Index.js
const {
    dependencies
} = require('../package.json'); // Requiring dependencies from package.json
const ver = dependencies['discord.js']; // Getting the Version of Discord.js
const mongooseConnectionString = process.env.MONGO_CONNECTION_URL; // Mongo Connection String
const {
    connect
} = require('mongoose');
const { Stats } = require('fs');
const guildid = process.env.GUILD_ID;
const {EmbedBuilder, Message, REST, Routes, ActivityType} = require('discord.js');

client.on("ready", async (client) => {
    const members = client.guilds.cache.reduce((a, g) => a+g.memberCount, 0)

    //setInterval(() => {client.user.setPresence({activities: [{name: `for map changes`,}],status: 'online'});}, 60000)

    console.log("")
    console.log(chalk.red.bold("——————————[Basic Info]——————————"))
    console.log(
        chalk.white(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) > 1 ? "Users:" : "User:"}`),
        chalk.red(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`),
        chalk.white("||"),
        chalk.white(`${client.guilds.cache.size > 1 ? "Servers:" : "Server:"}`),
        chalk.red(`${client.guilds.cache.size}`),
    )
    console.log(
        chalk.white(`Prefix:` + chalk.red(` ${prefix}`) + chalk.white(' & ') + chalk.red('/')),
        chalk.white("||"),
        chalk.white(`Slash Commands:`),
        chalk.red(`${client.SlashCommands.size}`),
        chalk.white("& Message Commands:"),
        chalk.red(`${client.commands.size}`),
    )
    console.log(
        chalk.white("Total Commands:"),
        chalk.red(`${client.commands.size + client.SlashCommands.size}`),
    )

    console.log("")
    console.log(chalk.red.bold("——————————[Statistics]——————————"))
    console.log(
        chalk.white(`Running on Node`), 
        chalk.green(process.version),
        chalk.white('on'),
        chalk.green(`${process.platform} ${process.arch}`)
    )
    console.log(
        chalk.white('Memory:'),
        chalk.green(`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}`),
        chalk.white('MB')
    )
    console.log(
        chalk.white('RSS:'),
        chalk.green(`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`),
        chalk.white('MB')
    )
    console.log(
        chalk.white('Discord.js Version:'),
        chalk.green(ver)
    )
    console.log("")
    console.log(chalk.red.bold("——————————[Connections]——————————"))
    console.log(chalk.white("✅ Successfully Connected To"), chalk.red(`${client.user.tag}`), chalk.white('('), chalk.green(client.user.id), chalk.white(')'))
    connect(mongooseConnectionString, {}).then(console.log(chalk.white("✅ Successfully Connected To"), chalk.red(`Mongoose Data Base`)))
    console.log("")
    console.log(chalk.red.bold("——————————[Server List]——————————"))

    var guilds = await client.guilds.fetch();
    await guilds.forEach(async guild => {
        console.log(`Server Name: ${guild.name} | Server ID: ${guild.id}`)
    })

})
