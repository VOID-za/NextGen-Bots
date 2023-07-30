const { EmbedBuilder } = require("discord.js");
const BotModel = require("../../src/models/bot.js");

module.exports = {
  name: "bots",
  description: "Find all the bots owned by a specific user on NextGen Bots.",
  async run(client, message, args) {
    const user =
      message.mentions.users.first() ||
      client.users.cache.get(args[0]) ||
      message.author;
    const userBots = await BotModel.find({ owner: user.id });
    if (userBots.length === 0) return message.reply("<:ul_no:946581450600370298> This user currently has no bots listed on our website.");

    const embed = new EmbedBuilder()
      .setColor("7289da")
      .setThumbnail(user.displayAvatarURL())
      .setTitle(`${user.username}'s Bots`)
      .setDescription(
        userBots
          .map(
            (bot) =>
              `<@${bot.id}> - ${
                bot.shortDesc || "No short description provided."
              } - [Website Link](https://universe-list.xyz/bots/${bot.id})`
          )
          .join("\n\n")
      )
      .setFooter({
        text: "NextGen Bots - User Info command",
        iconURL: global.client.user.displayAvatarURL(),
      });

    return message.reply({ embeds: [embed] });
  },
};
