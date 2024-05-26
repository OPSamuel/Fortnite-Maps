const {ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder} = require('discord.js');
const client = require('../index')

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
    await interaction.deferUpdate()
     }{
        const blacklist = require("../Schemas/Blacklist")
        blacklist.findOne({ Guild_ID: interaction.guild.id, Member_ID: interaction.user.id}, async(err, BlacklistData) => {
            if(err) throw err;
            if(!BlacklistData) {
                const systems = require("../Schemas/Systems");
                systems.findOne({Guild_Name: interaction.guild.name, Guild_ID: interaction.guild.id}, async(err, sysdata) => {
            if(err) throw err;
            //if(!sysdata) {systems.create({Guild_Name: interaction.guild.name, Guild_ID: interaction.guild.id, interaction.customIds: false, SlashCommands: false})}
            if(sysdata.SlashCommands === true && interaction.user.id !== sysdata.UserWhitelist) {

        try {
            const ownerembed = new EmbedBuilder()
            .setTitle("New Error")
            .setColor("Red")
            .setFooter({text: `Command: ${interaction.customId}`})
            .setTimestamp()


            var guild = interaction.guild;
            var member = interaction.member;
            var channel = interaction.channel;
            var errorTime = `<t:${Math.floor(Date.now() / 1000)}:R>`;
            const ErrorLogChannel = client.channels.cache.get("1219677449520943154")

            const embed = new EmbedBuilder()
                .setColor("Red")
                .setFooter({ text: "Error Flag System"})
                .setTimestamp()
            
                const embed1 = new EmbedBuilder()
                .setColor("Blurple")
                .setDescription("An error has been flagged while using a interaction command. All other forms of interaction command will not be logged with this system.")
                .setFooter({ text: "Error Flag System"})
                .setTimestamp()


            const owner = await client.users.fetch("574217755692236803")

            if (interaction.customId === 'v1') { 

                const button = new ButtonBuilder()
                .setCustomId("v1.0")
                .setLabel("v1.0")
                .setStyle(ButtonStyle.Success);
                const button1 = new ButtonBuilder()
                .setCustomId("v1.6")
                .setLabel("v1.6")
                .setStyle(ButtonStyle.Success);
                const button2 = new ButtonBuilder()
                .setCustomId("v1.7.1")
                .setLabel("v1.7.1")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
    
            }else if (interaction.customId === 'v2') {
    
                const button = new ButtonBuilder()
                .setCustomId("v2.0")
                .setLabel("v2.0")
                .setStyle(ButtonStyle.Success);
                
                const button1 = new ButtonBuilder()
                .setCustomId("v2.2")
                .setLabel("v2.2")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v2.5")
                .setLabel("v2.5")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v3') {
    
                const button = new ButtonBuilder()
                .setCustomId("v3.0")
                .setLabel("v3.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v3.2")
                .setLabel("v3.2")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v4') {
    
                const button = new ButtonBuilder()
                .setCustomId("v4.0")
                .setLabel("v4.0")
                .setStyle(ButtonStyle.Success);
                
                const button1 = new ButtonBuilder()
                .setCustomId("v4.1")
                .setLabel("v4.1")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v4.3")
                .setLabel("v4.3")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v4.4")
                .setLabel("v4.4")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v4.5")
                .setLabel("v4.5")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, );
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v5') {
    
                const button = new ButtonBuilder()
                .setCustomId("v5.0")
                .setLabel("v5.0")
                .setStyle(ButtonStyle.Success);
                
                const button1 = new ButtonBuilder()
                .setCustomId("v5.20")
                .setLabel("v5.20")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v5.30")
                .setLabel("v5.30")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v5.40")
                .setLabel("v5.20")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v6') {
    
                const button = new ButtonBuilder()
                .setCustomId("v6.0")
                .setLabel("v6.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v6.10")
                .setLabel("v6.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v6.20")
                .setLabel("v6.20")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v6.21")
                .setLabel("v6.21")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v6.22")
                .setLabel("v6.22")
                .setStyle(ButtonStyle.Success);
    
                const button5 = new ButtonBuilder()
                .setCustomId("v6.30")
                .setLabel("v6.30")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
                const row1 = new ActionRowBuilder().addComponents(button5);
    
    
            interaction.followUp({components: [row, row1], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v7') {
    
                const button = new ButtonBuilder()
                .setCustomId("v7.0")
                .setLabel("v7.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v7.01")
                .setLabel("v7.01")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v7.10")
                .setLabel("v7.10")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v7SNOW")
                .setLabel("v7SNOW")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v7.20")
                .setLabel("v7.20")
                .setStyle(ButtonStyle.Success);
    
                const button5 = new ButtonBuilder()
                .setCustomId("v7.30")
                .setLabel("v7.30")
                .setStyle(ButtonStyle.Success);
    
                const button6 = new ButtonBuilder()
                .setCustomId("v7.40")
                .setLabel("v7.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);   
                const row1 = new ActionRowBuilder().addComponents(button5, button6);
    
            interaction.followUp({components: [row, row1], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v8') {
    
                const button = new ButtonBuilder()
                .setCustomId("v8.0")
                .setLabel("v8.0")
                .setStyle(ButtonStyle.Success);
                
                const button1 = new ButtonBuilder()
                .setCustomId("v8.10")
                .setLabel("v8.10")
                .setStyle(ButtonStyle.Success);
                
                const button2 = new ButtonBuilder()
                .setCustomId("v8.20")
                .setLabel("v8.20")
                .setStyle(ButtonStyle.Success);
                
                const button3 = new ButtonBuilder()
                .setCustomId("v8.30")
                .setLabel("v8.30")
                .setStyle(ButtonStyle.Success);
                
                const button4 = new ButtonBuilder()
                .setCustomId("v8.40")
                .setLabel("v8.40")
                .setStyle(ButtonStyle.Success);
                
                const button5 = new ButtonBuilder()
                .setCustomId("v8.50")
                .setLabel("v8.50")
                .setStyle(ButtonStyle.Success);
    
    
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
                const row1 = new ActionRowBuilder().addComponents(button5);
    
            interaction.followUp({components: [row, row1], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v9') {
    
                const button = new ButtonBuilder()
                .setCustomId("v9.0")
                .setLabel("v9.0")
                .setStyle(ButtonStyle.Success);
                
                const button1 = new ButtonBuilder()
                .setCustomId("v9.01")
                .setLabel("v9.01")
                .setStyle(ButtonStyle.Success);
                
                const button2 = new ButtonBuilder()
                .setCustomId("v9.10")
                .setLabel("v9.10")
                .setStyle(ButtonStyle.Success);
                
                const button3 = new ButtonBuilder()
                .setCustomId("v9.20")
                .setLabel("v9.20")
                .setStyle(ButtonStyle.Success);
                
                const button4 = new ButtonBuilder()
                .setCustomId("v9.30")
                .setLabel("v9.30")
                .setStyle(ButtonStyle.Success);
                
                const button5 = new ButtonBuilder()
                .setCustomId("v9.40")
                .setLabel("v9.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
                const row1 = new ActionRowBuilder().addComponents(button5);
    
            interaction.followUp({components: [row, row1], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v10') {
    
                const button = new ButtonBuilder()
                .setCustomId("v10.0")
                .setLabel("v10.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v10.10")
                .setLabel("v10.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v10.20")
                .setLabel("v10.20")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v10.30")
                .setLabel("v10.30")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v10.40")
                .setLabel("v10.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4, );
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v11') {
    
                const button = new ButtonBuilder()
                .setCustomId("v11.0")
                .setLabel("v11.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v11.10")
                .setLabel("v11.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v11.30")
                .setLabel("v11.30")
                .setStyle(ButtonStyle.Success);
                
                const button3 = new ButtonBuilder()
                .setCustomId("v11.40")
                .setLabel("v11.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v12') {
    
                const button = new ButtonBuilder()
                .setCustomId("v12.0")
                .setLabel("v12.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v12.20")
                .setLabel("v12.20")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v12.60")
                .setLabel("v12.60")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13') {
    
                const button = new ButtonBuilder()
                .setCustomId("v13.0")
                .setLabel("v13.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v13.20s7")
                .setLabel("v13.20s7")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v13.20s6")
                .setLabel("v13.20s6")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v13.20s5")
                .setLabel("v13.20s5")
                .setStyle(ButtonStyle.Success);
    
                const button5 = new ButtonBuilder()
                .setCustomId("v13.20s4")
                .setLabel("v13.20s4")
                .setStyle(ButtonStyle.Success);
    
                const button6 = new ButtonBuilder()
                .setCustomId("v13.20s3")
                .setLabel("v13.20s3")
                .setStyle(ButtonStyle.Success);
    
                const button7 = new ButtonBuilder()
                .setCustomId("v13.20s2")
                .setLabel("v13.20s2")
                .setStyle(ButtonStyle.Success);
    
                const button8 = new ButtonBuilder()
                .setCustomId("v13.20s1")
                .setLabel("v13.20s1")
                .setStyle(ButtonStyle.Success);
    
                const button9 = new ButtonBuilder()
                .setCustomId("v13.30")
                .setLabel("v13.30")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button5);
                const row1 = new ActionRowBuilder().addComponents(button6, button7, button8, button9);
    
            interaction.followUp({components: [row, row1], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v14') {
    
                const button = new ButtonBuilder()
                .setCustomId("v14.0")
                .setLabel("v14.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v14.10")
                .setLabel("v14.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v14.20")
                .setLabel("v14.20")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v14.40")
                .setLabel("v14.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v15') {
    
                const button = new ButtonBuilder()
                .setCustomId("v15.0")
                .setLabel("v15.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v15.10s1")
                .setLabel("v15.10s1")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v15.10s2")
                .setLabel("v15.10s2")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v15.20")
                .setLabel("v15.20")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v15.30")
                .setLabel("v15.30")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v16') {
    
                const button = new ButtonBuilder()
                .setCustomId("v16.0")
                .setLabel("v16.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v16.10")
                .setLabel("v16.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v16.20")
                .setLabel("v16.20")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v16.30")
                .setLabel("v16.30")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v16.40")
                .setLabel("v16.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v17') {
    
                const button = new ButtonBuilder()
                .setCustomId("v17.0")
                .setLabel("v17.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v17.10")
                .setLabel("v17.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v17.30")
                .setLabel("v17.30")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v17.40")
                .setLabel("v17.40")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v17.50")
                .setLabel("v17.50")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v18') {
    
                const button = new ButtonBuilder()
                .setCustomId("v18.0")
                .setLabel("v18.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v18.10")
                .setLabel("v18.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v18.21")
                .setLabel("v18.21")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v18.40")
                .setLabel("v18.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v19') {
    
                const button = new ButtonBuilder()
                .setCustomId("v19.0")
                .setLabel("v19.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v19.01")
                .setLabel("v19.01")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v19.10")
                .setLabel("v19.10")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v19.20")
                .setLabel("v19.20")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v19.30")
                .setLabel("v19.30")
                .setStyle(ButtonStyle.Success);
    
                const button5 = new ButtonBuilder()
                .setCustomId("v19.40")
                .setLabel("v19.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
                const row1 = new ActionRowBuilder().addComponents(button5);
    
            interaction.followUp({components: [row, row1], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v20') {
    
                const button = new ButtonBuilder()
                .setCustomId("v20.0")
                .setLabel("v20.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v20.10")
                .setLabel("v20.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v20.20")
                .setLabel("v20.20")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v20.30")
                .setLabel("v20.30")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v20.40")
                .setLabel("v20.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v21') {
    
                const button = new ButtonBuilder()
                .setCustomId("v21.0")
                .setLabel("v21.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v21.10")
                .setLabel("v21.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v21.20")
                .setLabel("v21.20")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v21.30")
                .setLabel("v21.30")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v21.40")
                .setLabel("v21.40")
                .setStyle(ButtonStyle.Success);
    
                const button5 = new ButtonBuilder()
                .setCustomId("v21.50")
                .setLabel("v21.50")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
                const row1 = new ActionRowBuilder().addComponents(button5);
    
            interaction.followUp({components: [row, row1], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v22') {
    
                const button = new ButtonBuilder()
                .setCustomId("v22.0")
                .setLabel("v22.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v22.10")
                .setLabel("v22.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v22.20")
                .setLabel("v22.20")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v22.30")
                .setLabel("v22.30")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v22.40")
                .setLabel("v22.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v23') {
    
                const button = new ButtonBuilder()
                .setCustomId("v23.0")
                .setLabel("v23.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v23.10")
                .setLabel("v23.10")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v24') {
    
                const button = new ButtonBuilder()
                .setCustomId("v24.0")
                .setLabel("v24.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v24.10")
                .setLabel("v24.10")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v24.20")
                .setLabel("v24.20")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v24.30")
                .setLabel("v24.30")
                .setStyle(ButtonStyle.Success);
    
                const button4 = new ButtonBuilder()
                .setCustomId("v24.40")
                .setLabel("v24.40")
                .setStyle(ButtonStyle.Success);
            
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3, button4);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v25') {
    
                const button = new ButtonBuilder()
                .setCustomId("v25.0")
                .setLabel("v25.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v25.30")
                .setLabel("v25.30")
                .setStyle(ButtonStyle.Success);
    
                const row = new ActionRowBuilder().addComponents(button, button1);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v26') {
    
                const button = new ButtonBuilder()
                .setCustomId("v26.0")
                .setLabel("v26.0")
                .setStyle(ButtonStyle.Success);
    
                const row = new ActionRowBuilder().addComponents(button);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v27') {
    
                const button = new ButtonBuilder()
                .setCustomId("v27.0")
                .setLabel("v27.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v27.00s2")
                .setLabel("v27.00s2")
                .setStyle(ButtonStyle.Success);
    
                const button2 = new ButtonBuilder()
                .setCustomId("v27.10")
                .setLabel("v27.10")
                .setStyle(ButtonStyle.Success);
    
                const button3 = new ButtonBuilder()
                .setCustomId("v27.11")
                .setLabel("v27.11")
                .setStyle(ButtonStyle.Success);
    
                const row = new ActionRowBuilder().addComponents(button, button1, button2, button3);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v28') {
    
                const button = new ButtonBuilder()
                .setCustomId("v28.0")
                .setLabel("v28.0")
                .setStyle(ButtonStyle.Success);
    
                const button1 = new ButtonBuilder()
                .setCustomId("v28.10")
                .setLabel("v28.10")
                .setStyle(ButtonStyle.Success);
    
                const row = new ActionRowBuilder().addComponents(button, button1);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v29') {
    
                const button = new ButtonBuilder()
                .setCustomId("v29.0")
                .setLabel("v29.0")
                .setStyle(ButtonStyle.Success);
    
                const row = new ActionRowBuilder().addComponents(button);
    
            interaction.followUp({components: [row], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }// Start of version buttons
            else if (interaction.customId === 'v1.0') {
                interaction.followUp({files: ['Maps/Version 1/Version 1.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v1.6') {
                interaction.followUp({files: ['Maps/Version 1/Version 1.6.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v1.7.1') {
                interaction.followUp({files: ['Maps/Version 1/Version 1.7.1.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v2.0') {
                interaction.followUp({files: ['Maps/Version 2/Version 2.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v2.2') {
                interaction.followUp({files: ['Maps/Version 2/Version 2.2.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v2.5') {
                interaction.followUp({files: ['Maps/Version 2/Version 2.5.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v3.0') {
                interaction.followUp({files: ['Maps/Version 3/Version 3.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v3.2') {
                interaction.followUp({files: ['Maps/Version 3/Version 3.2.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v4.0') {
                interaction.followUp({files: ['Maps/Version 4/Version 4.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v4.1') {
                interaction.followUp({files: ['Maps/Version 4/Version 4.1.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v4.3') {
                interaction.followUp({files: ['Maps/Version 4/Version 4.3.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v4.4') {
                interaction.followUp({files: ['Maps/Version 4/Version 4.4.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v4.5') {
                interaction.followUp({files: ['Maps/Version 4/Version 4.5.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v5.0') {
                interaction.followUp({files: ['Maps/Version 5/Version 5.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v5.20') {
                interaction.followUp({files: ['Maps/Version 5/Version 5.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v5.30') {
                interaction.followUp({files: ['Maps/Version 5/Version 5.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v5.40') {
                interaction.followUp({files: ['Maps/Version 5/Version 5.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v6.0') {
                interaction.followUp({files: ['Maps/Version 6/Version 6.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v6.10') {
                interaction.followUp({files: ['Maps/Version 6/Version 6.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v6.20') {
                interaction.followUp({files: ['Maps/Version 6/Version 6.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v6.21') {
                interaction.followUp({files: ['Maps/Version 6/Version 6.21.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v6.22') {
                interaction.followUp({files: ['Maps/Version 6/Version 6.22.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v6.30') {
                interaction.followUp({files: ['Maps/Version 6/Version 6.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v7.0') {
                interaction.followUp({files: ['Maps/Version 7/Version 7.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v7SNOW') {
                interaction.followUp({files: ['Maps/Version 7/Version 7 SNOW.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v7.01') {
                interaction.followUp({files: ['Maps/Version 7/Version 7.01.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v7.10') {
                interaction.followUp({files: ['Maps/Version 7/Version 7.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v7.20') {
                interaction.followUp({files: ['Maps/Version 7/Version 7.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v7.30') {
                interaction.followUp({files: ['Maps/Version 7/Version 7.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v7.40') {
                interaction.followUp({files: ['Maps/Version 7/Version 7.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v8.0') {
                interaction.followUp({files: ['Maps/Version 8/Version 8.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v8.10') {
                interaction.followUp({files: ['Maps/Version 8/Version 8.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v8.20') {
                interaction.followUp({files: ['Maps/Version 8/Version 8.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v8.30') {
                interaction.followUp({files: ['Maps/Version 8/Version 8.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v8.40') {
                interaction.followUp({files: ['Maps/Version 8/Version 8.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v8.50') {
                interaction.followUp({files: ['Maps/Version 8/Version 8.50.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v9.0') {
                interaction.followUp({files: ['Maps/Version 9/Version 9.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v9.01') {
                interaction.followUp({files: ['Maps/Version 9/Version 9.01.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v9.10') {
                interaction.followUp({files: ['Maps/Version 9/Version 9.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v9.20') {
                interaction.followUp({files: ['Maps/Version 9/Version 9.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v9.30') {
                interaction.followUp({files: ['Maps/Version 9/Version 9.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v9.40') {
                interaction.followUp({files: ['Maps/Version 9/Version 9.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v10.0') {
                interaction.followUp({files: ['Maps/Version 10/Version 10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v10.10') {
                interaction.followUp({files: ['Maps/Version 10/Version 10.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v10.20') {
                interaction.followUp({files: ['Maps/Version 10/Version 10.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v10.30') {
                interaction.followUp({files: ['Maps/Version 10/Version 10.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v10.40') {
                interaction.followUp({files: ['Maps/Version 10/Version 10.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v11.0') {
                interaction.followUp({files: ['Maps/Version 11/Version 11.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v11.10') {
                interaction.followUp({files: ['Maps/Version 11/Version 11.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v11.30') {
                interaction.followUp({files: ['Maps/Version 11/Version 11.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v11.40') {
                interaction.followUp({files: ['Maps/Version 11/Version 11.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v12.0') {
                interaction.followUp({files: ['Maps/Version 12/Version 12.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v12.20') {
                interaction.followUp({files: ['Maps/Version 12/Version 12.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v12.60') {
                interaction.followUp({files: ['Maps/Version 12/Version 12.60.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.0') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.20s1') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.20s1.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.20s2') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.20s2.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.20s3') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.20s3.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.20s4') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.20s4.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.20s5') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.20s5.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.20s6') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.20s6.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.20s7') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.20s7.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v13.30') {
                interaction.followUp({files: ['Maps/Version 13/Version 13.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v14.0') {
                interaction.followUp({files: ['Maps/Version 14/Version 14.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v14.10') {
                interaction.followUp({files: ['Maps/Version 14/Version 14.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v14.20') {
                interaction.followUp({files: ['Maps/Version 14/Version 14.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v14.40') {
                interaction.followUp({files: ['Maps/Version 14/Version 14.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v15.0') {
                interaction.followUp({files: ['Maps/Version 15/Version 15.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v15.10s1') {
                interaction.followUp({files: ['Maps/Version 15/Version 15.10s1.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v15.10s2') {
                interaction.followUp({files: ['Maps/Version 15/Version 15.10s2.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v15.20') {
                interaction.followUp({files: ['Maps/Version 15/Version 15.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v15.30') {
                interaction.followUp({files: ['Maps/Version 15/Version 15.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v16.0') {
                interaction.followUp({files: ['Maps/Version 16/Version 16.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v16.10') {
                interaction.followUp({files: ['Maps/Version 16/Version 16.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v16.20') {
                interaction.followUp({files: ['Maps/Version 16/Version 16.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v16.30') {
                interaction.followUp({files: ['Maps/Version 16/Version 16.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v16.40') {
                interaction.followUp({files: ['Maps/Version 16/Version 16.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v17.0') {
                interaction.followUp({files: ['Maps/Version 17/Version 17.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v17.10') {
                interaction.followUp({files: ['Maps/Version 17/Version 17.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v17.30') {
                interaction.followUp({files: ['Maps/Version 17/Version 17.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v17.40') {
                interaction.followUp({files: ['Maps/Version 17/Version 17.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v17.50') {
                interaction.followUp({files: ['Maps/Version 17/Version 17.50.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v18.0') {
                interaction.followUp({files: ['Maps/Version 18/Version 18.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v18.10') {
                interaction.followUp({files: ['Maps/Version 18/Version 18.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v18.21') {
                interaction.followUp({files: ['Maps/Version 18/Version 18.21.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v18.40') {
                interaction.followUp({files: ['Maps/Version 18/Version 18.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v19.0') {
                interaction.followUp({files: ['Maps/Version 19/Version 19.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v19.01') {
                interaction.followUp({files: ['Maps/Version 19/Version 19.01.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v19.10') {
                interaction.followUp({files: ['Maps/Version 19/Version 19.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v19.20') {
                interaction.followUp({files: ['Maps/Version 19/Version 19.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v19.30') {
                interaction.followUp({files: ['Maps/Version 19/Version 19.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v19.40') {
                interaction.followUp({files: ['Maps/Version 19/Version 19.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v20.0') {
                interaction.followUp({files: ['Maps/Version 20/Version 20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v20.10') {
                interaction.followUp({files: ['Maps/Version 20/Version 20.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v20.20') {
                interaction.followUp({files: ['Maps/Version 20/Version 20.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v20.30') {
                interaction.followUp({files: ['Maps/Version 20/Version 20.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v20.40') {
                interaction.followUp({files: ['Maps/Version 20/Version 20.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v21.0') {
                interaction.followUp({files: ['Maps/Version 21/Version 21.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v21.10') {
                interaction.followUp({files: ['Maps/Version 21/Version 21.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v21.20') {
                interaction.followUp({files: ['Maps/Version 21/Version 21.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v21.30') {
                interaction.followUp({files: ['Maps/Version 21/Version 21.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v21.40') {
                interaction.followUp({files: ['Maps/Version 21/Version 21.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v21.50') {
                interaction.followUp({files: ['Maps/Version 21/Version 21.50.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v22.0') {
                interaction.followUp({files: ['Maps/Version 22/Version 22.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v22.10') {
                interaction.followUp({files: ['Maps/Version 22/Version 22.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v22.20') {
                interaction.followUp({files: ['Maps/Version 22/Version 22.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v22.30') {
                interaction.followUp({files: ['Maps/Version 22/Version 22.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v22.40') {
                interaction.followUp({files: ['Maps/Version 22/Version 22.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v23.0') {
                interaction.followUp({files: ['Maps/Version 23/Version 23.jpg'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v23.10') {
                interaction.followUp({files: ['Maps/Version 23/Version 23.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v24.0') {
                interaction.followUp({files: ['Maps/Version 24/Version 24.jpg'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v24.10') {
                interaction.followUp({files: ['Maps/Version 24/Version 24.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v24.20') {
                interaction.followUp({files: ['Maps/Version 24/Version 24.20.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v24.30') {
                interaction.followUp({files: ['Maps/Version 24/Version 24.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v24.40') {
                interaction.followUp({files: ['Maps/Version 24/Version 24.40.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v25.0') {
                interaction.followUp({files: ['Maps/Version 25/Version 25.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v25.30') {
                interaction.followUp({files: ['Maps/Version 25/Version 25.30.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v26.0') {
                interaction.followUp({files: ['Maps/Version 26/Version 26.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v27.0') {
                interaction.followUp({files: ['Maps/Version 27/Version 27.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v27.00s2') {
                interaction.followUp({files: ['Maps/Version 27/Version 27.00s2.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v27.10') {
                interaction.followUp({files: ['Maps/Version 27/Version 27.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v27.11') {
                interaction.followUp({files: ['Maps/Version 27/Version 27.11.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v28.0') {
                interaction.followUp({files: ['Maps/Version 28/Version 28.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v28.10') {
                interaction.followUp({files: ['Maps/Version 28/Version 28.10.png'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }else if (interaction.customId === 'v29.0') {
                interaction.followUp({files: ['Maps/Version 29/Version 29.jpg'], ephemeral: true}).catch(err => {ownerembed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}),embed.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), embed1.addFields({name: "Error Interaction", value : `\`${interaction.customId}\``},{name: "Error User", value : `${member} | ${member.id}`},{name: "Error Stack", value : `\`${err.stack}\``},{name: "Error Message", value : `\`${err.message}\``},{name: "Error Timestamp", value : `${errorTime}`}), interaction.followUp({embeds: [embed], ephemeral: true}), ErrorLogChannel.send({embeds: [embed1]}), owner.send({embeds: [ownerembed]})})
            }
        } catch(error) {

            var guild = interaction.guild;
            var member = interaction.member;
            var channel = interaction.channel;
            var errorTime = `<t:${Math.floor(Date.now() / 1000)}:R>`;
            const ErrorLogChannel = client.channels.cache.get("1219677449520943154")

            const embed = new EmbedBuilder()
            .setColor("Red")
            .setDescription("Please send this information to <@574217755692236803>")
            .addFields(
                {name: "Error Interaction", value : `\`${interaction.customId}\``},
                {name: "Error User", value : `${member} | ${member.id}`},
                {name: "Error Stack", value : `\`${error.stack}\``},
                {name: "Error Message", value : `\`${error.message}\``},
                {name: "Error Timestamp", value : `${errorTime}`},
                )
                .setFooter({ text: "Error Flag System"})
                .setTimestamp()
            
                const embed1 = new EmbedBuilder()
                .setColor("Blurple")
                .setDescription("An error has been flagged while using a interaction command. All other forms of interaction command will not be logged with this system.")
                .addFields(
                    {name: "Error Command", value : `\`${interaction.customId}\``},
                    {name: "Error User", value : `${member} | ${member.id}`},
                    {name: "Error Stack", value : `\`${error.stack}\``},
                    {name: "Error Message", value : `\`${error.message}\``},
                    {name: "Error Timestamp", value : `${errorTime}`},
                    )
                    .setFooter({ text: "Error Flag System"})
                    .setTimestamp()

            interaction.followUp({embeds: [embed], ephemeral: true})
            ErrorLogChannel.send({embeds: [embed1]})

            //interaction.followUp({content: `Please send this information to <@574217755692236803>.\n\n**__Error Information:__**\nButton: ${interaction.customId}\n\`\`\`${error}\`\`\``, ephemeral: true})
        }
        }
    })
    }else {
    }
    }) 
}
})