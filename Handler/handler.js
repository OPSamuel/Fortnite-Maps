const {
    Client
} = require('discord.js');
const {
    glob
} = require('glob');
const {
    promisify
} = require('util');
const globPromise = promisify(glob);
const chalk
= require('chalk');

/**
 * @param {Client} client
 */
module.exports = async (client) => {

    const LegacyCommands = await globPromise(`${process.cwd()}/commands/*/*.js`);
    LegacyCommands.map(async (path) => {
        const file = require(path);
        const splitted = path.split("/");
        const dir = splitted[splitted.length - 2];
        const cmdName = file?.name;
        const cmdAliases = file?.aliases;
        const files = {
            dir,
            ...file
        }

        if (cmdName) {
            client.commands.set(cmdName, files);
            module.exports = {commands: files};
            if (cmdAliases < 1) return;
            if (cmdAliases && Array.isArray(cmdAliases)) {
                cmdAliases.forEach(alias => client.aliases.set(alias, files))
            }
        }
    });

    // Slash Commands Handler
    const slashCommands = [];
    const SlashCommandsFiles = await globPromise(`${process.cwd()}/SlashCommands/*/*.js`);
    SlashCommandsFiles.map(async (path) => {
        const file = require(path);
        if (!file?.name) return
        const splitted = path.split("/");
        const dir = splitted[splitted.length - 2];
        const files = {
            dir,
            ...file
        }
        client.SlashCommands.set(file.name, files);
        slashCommands.push(file)



    });
    client.on("ready", async () => {
        //client.guilds.cache.get('1188570570288275597').commands.set(slashCommands)
        //client.guilds.cache.get('891954147040038913').commands.set(slashCommands).then(console.log(chalk.white(`✅ Successfully Registered`), chalk.red(client.SlashCommands.size), chalk.white('Slash Commands in'), chalk.red(client.guilds.cache.size), chalk.white(`${client.guilds.cache.size > 1 ? "Guilds" : "Guild"}`)));

        // Slash Commands for all the guilds
        //await client.application.commands.set(slashCommands).then(console.log(chalk.white(`✅ Successfully Registered`), chalk.red(client.SlashCommands.size), chalk.white('Slash Commands in'), chalk.red(client.guilds.cache.size), chalk.white(`${client.guilds.cache.size > 1 ? "Guilds" : "Guild"}`)))

        //How to unregister slashcommands
        //client.application.commands.set([])
        //client.guilds.cache.get('891954147040038913').commands.set([])
        //client.application.commands.set([])
        //client.guilds.cache.get('1188570570288275597').commands.set([])
    });

    // Events Handler
    const eventFiles = await globPromise(`${process.cwd()}/Events/*.js`);
    eventFiles.map(async (filePaths) => require(filePaths));
}
