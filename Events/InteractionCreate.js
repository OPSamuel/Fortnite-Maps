const client = require('../index');
const {owners} = require("../json/owners.json")
const { EmbedBuilder, Message} = require("discord.js")
const emoji = '<:xmark:1044634264416817292>'
const ownerid = process.env.OWNERID


client.on("interactionCreate", async (interaction) => {
    const blacklist = require("../Schemas/Blacklist");
    blacklist.findOne({Member_ID: interaction.user.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            const systems = require("../Schemas/Systems");
            systems.findOne({Guild_Name: interaction.guild.name, Guild_ID: interaction.guild.id}, async(err, sysdata) => {
        if(err) throw err;
        //if(!sysdata) {systems.create({Guild_Name: interaction.guild.name, Guild_ID: interaction.guild.id, Commands: false, SlashCommands: false})}
        if(sysdata.SlashCommands === true && interaction.user.id !== sysdata.UserWhitelist) {
               // Slash Commands
    if (interaction.isCommand()) {
        const command = client.SlashCommands.get(interaction.commandName);
        // If Command Doesnt exist
        if (!command) return interaction.reply({
            content: "Slash Command doesnt exist",
            ephemeral: true
        }) && client.SlashCommands.delete(interaction.commandName)

        // User Permissions Check
        if (!interaction.member.permissions.has(command.User_Permissions || [])) return;

        // Under Maintenance Commands
        if (command.maintenance) {
            if (!owners.includes(interaction.user.id)) {
                const maintenancembed = new EmbedBuilder()
                .setColor("RED")
                .setDescription(`${emoji} This command is on maintenance please try later`)
                return interaction.reply({ 
                    embeds: [maintenancembed],
                    ephemeral: true
                })
            }
        }

        // Bot Permissions Check
        if (!interaction.guild.me.permissions.has(command.Bot_Permissions || [])) {
        const permsembed = new EmbedBuilder()
        .setColor("RED")
        .setDescription(`${emoji} I am missing the permission \`${command.Bot_Permissions || []}\``)
            return interaction.reply({
                embeds: [permsembed],
                ephemeral: true
            });
        }

        // Owner Only Commands
        if (command.ownerOnly) {
            if (!owners.includes(interaction.user.id)) {
                return;
        };
    }

    
    const args = [];
    
    for (let option of interaction.options.data) {
        if (option.type === 'SUB_COMMAND') {
            if (option.name) args.push(option.name);
            option.options?.forEach(x => {
                if (x.value) args.push(x.value);
            });
        } else if (option.value) args.push(option.value);
    }
    try{
        await command.run(client, interaction, args)//.catch(err => {interaction.followUp({content: `\n\n**__Error Information:__**\nButton: ${command}\n\`\`\`${err}\`\`\``, ephemeral: true})})
    } catch(err) {
        {interaction.followUp({content: `Please send this information to <@574217755692236803>. \n\n**__Error Information:__**\nButton: ${command}\n\`\`\`${err}\`\`\``, ephemeral: true})}
    }

 
    // Context Menu
    if (interaction.isContextMenu()) {
        const command = client.SlashCommands.get(interaction.commandName);
        if (command) await command.run(client, interaction)
    }
    }
        }else {
            const disabledembed = new EmbedBuilder()
            .setTitle("Command Not Executed")
            .setColor("Red")
            .setDescription(`You are unable to execute any slash commands at this time. They have been temporarily disabled by <@${ownerid}>`)
            .setTimestamp()
            interaction.reply({embeds: [disabledembed], ephemeral: true})
        }})

} else {
    const blacklistedembed = new EmbedBuilder()
    .setColor("RED")
    .setTitle("Blacklisted")
    .setDescription("You are blacklisted from using me:")
    .addFields(
        {name: `User:`, value: `${interaction.user.tag}`},
        {name: `User ID:`, value: `${interaction.user.id}`},
        {name: `Blacklist Reason:`, value: `${data.Reason}`},    
        {name: `Blacklisted At:`, value: `${data.Time}`},    
        {name: `Want to appeal?`, value: `Join our [support server](https://discord.gg/JDnnSqrP3d)`}
    )
    .setTimestamp()
    const globallogchannel = process.env.GLOBAL_LOG_CHANNEL;
    const logchannel = client.channels.cache.get(`${globallogchannel}`)
    const embed = new EmbedBuilder()
    .setColor("RED")
    .setTitle("Blacklisted")
    .setDescription("A user tried to interact with me, they are blacklisted, more information below:")
    .addFields(
        {name: `User:`, value: `${interaction.user.tag}`},
        {name: `User ID:`, value: `${interaction.user.id}`},
        {name: `Guild:`, value: `${interaction.guild.name}`},
        {name: `Guild: ID`, value: `${interaction.guild.id}`},
        {name: `Blacklist Reason:`, value: `${data.Reason}`},    
        {name: `Blacklisted At:`, value: `${data.Time}`},    
    )
    .setTimestamp()
        logchannel.send({embeds: [embed]})
        interaction.reply({embeds: [blacklistedembed], ephemeral: true})

}
})
})