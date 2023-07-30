const { EmbedBuilder } = require("@discordjs/builders");
module.exports = {
  async run(client, member) {
    if (member.guild.id !== global.config.guilds.main) return;
    try {
      const bots = await global.botModel.find({ owner: member.id });

      if (bots.length > 0) {
        const bot_kick = new EmbedBuilder()
          .setTitle("Bot Deleted")
          .setColor(15548997)
          .setDescription(
            "<:ul_no:946581450600370298> **" +
              bots.length +
              " bot(s)** have been deleted because <@" +
              member.user.id +
              "> has left the server."
          );

        for (const bot of bots) {
          const guild = client.guilds.cache.get(member.guild.id);
          const botMember = await guild.members.fetch(bot.id);
          if (botMember) {
            bot_kick.addFields({
              name: "Bot Deleted:",
              value: `${botMember.user.username}`,
              inline: true,
            });
            const botm = await global.botModel.findOne({
              id: botMember.id,
            });
            await botm.delete();
            await botMember.kick();
          }

          client.channels
            .resolve(global.config.channels.weblogs)
            .send({ embeds: [bot_kick] });
        }
      }
    } catch (err) {
      console.log(err);
    }
    const embed = new EmbedBuilder()
      .setAuthor({
        name: member.user.username,
        iconURL: member.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTitle("Member Left")
      .setDescription(`${member.user} has left the server.`)
      .addFields({
        name: "Joined Discord",
        value: `<t:${Math.floor(member.user.createdTimestamp / 1000)}:R>`,
        inline: true,
      })
      .addFields({
        name: "Joined Server",
        value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`,
        inline: true,
      })
      .addFields({ name: "Bot", value: `${member.user.bot}`, inline: true })
      .setFooter({
        text: "NextGen Bots - Member Leave Logs",
        iconURL: client.user.displayAvatarURL(),
      });
    client.channels.resolve("1132078543409516693").send({ embeds: [embed] });
  },
};
