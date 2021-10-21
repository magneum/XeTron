const { MessageEmbed } = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
  name: "embedgen",
  aliases: [],
  description: "embed Generator",
  category: "🍯HyCore",
  run: async (client, message, args) => {
    try {
      const filter = (msg) => msg.author.id == message.author.id;
      const options = {
        max: 1,
      };

      const embed = new MessageEmbed();
      message.channel.send(
        "Reply `skip` or `no` for next question, Reply `cancel` to stop the command."
      );

      message.channel.send("So, Do you want your embed to have any title?");
      let title = await message.channel.awaitMessages(filter, options);
      if (title.first().content == "cancel")
        return message.channel.send("Embed Generator Cancelled.");
      if (
        title.first().content !== "skip" &&
        title.first().content !== "cancel"
      )
        embed.setTitle(title.first().content);

      message.channel.send(
        "great, now o you want your embed to have any Description?"
      );
      let Description = await message.channel.awaitMessages(filter, options);
      if (Description.first().content == "cancel")
        return message.channel.send("Embed Generator Cancelled.");
      if (
        Description.first().content !== "skip" &&
        Description.first().content !== "cancel"
      )
        embed.setDescription(Description.first().content);

      message.channel.send(
        "So, Do you want your embed to have any Footer? or cancel"
      );
      let Footer = await message.channel.awaitMessages(filter, options);
      if (Footer.first().content == "cancel")
        return message.channel.send("Embed Generator Cancelled. ");
      if (
        Footer.first().content !== "skip" &&
        Footer.first().content !== "cancel"
      )
        embed.setFooter(Footer.first().content);

      message.channel.send(
        "So, Do you want your embed to have any specifci color? Default is Black"
      );
      let Color = await message.channel.awaitMessages(filter, options);
      if (Color.first().content == "cancel")
        return message.channel.send("Embed Generator Cancelled.");
      if (
        Color.first().content !== "skip" &&
        Color.first().content !== "cancel"
      )
        embed.setColor(Color.first().content.toUpperCase() || "2f3136");

      message.channel.send(
        "So, Do you want your embed to have any Author Field?"
      );
      let Author = await message.channel.awaitMessages(filter, options);
      if (Author.first().content == "cancel")
        return message.channel.send("Embed Generator Cancelled.");
      if (
        Author.first().content !== "skip" &&
        Author.first().content !== "cancel"
      )
        embed.setAuthor(Author.first().content);

      message.channel.send(
        "So, Do you want your embed to have any TimeStamp? Reply `yes` or `no`"
      );
      let TimeStamp = await message.channel.awaitMessages(filter, options);
      if (TimeStamp.first().content == "cancel")
        return message.channel.send("Embed Generator Cancelled.");
      if (TimeStamp.first().content !== "yes") embed.setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      console.error(error);
    }
  },
};

