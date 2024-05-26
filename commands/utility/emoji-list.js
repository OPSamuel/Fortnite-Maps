const {Discord, EmbedBuilder } = require("discord.js");

module.exports = {
        name: 'emoji-list',
        description: 'Shows the information on the bot',
        User_Permissions: 'MANAGE_EMOJIS_AND_STICKERS',
        Bot_Permissions: 'MANAGE_EMOJIS_AND_STICKERS',
        status: "Working",
  run: async (client, message, args) => {
    try {
      let Emojis = "";
      let EmojisAnimated = "";
      let EmojiCount = 0;
      let Animated = 0;
      let OverallEmojis = 0;
      function Emoji(id) {
        return client.emojis.cache.get(id).toString();
      }

      message.guild.emojis.cache.forEach(emoji => {
        OverallEmojis++;
        if (emoji.animated) {
          Animated++;
          EmojisAnimated += Emoji(emoji.id);
        } else {
          EmojiCount++;
          Emojis += Emoji(emoji.id);
        }
      });

      let emn = new EmbedBuilder();
      emn.setTitle(`Emojis of ${message.guild.name} server`);
      emn.setColor("Green");
      emn.setThumbnail(
        message.guild.iconURL({ dynamic: true, format: "png", size: 512 })
      );
      emn.setDescription(
        `**Animated [${Animated}]**
${EmojisAnimated}
**Standard [${EmojiCount}]**
${Emojis}`
      );
      emn.setColor("BLUE");
      message.channel.send({embeds :[emn]});
    } catch (err) {
        const errembed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("An error has occoured!")
        .addFields(
          {name: "Error:", value: `${err.message}`})
      return message.channel.send({embeds: [errembed]})
    }
  }
}