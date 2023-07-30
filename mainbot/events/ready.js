const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ready",
  async run(client) {
    global.logger.system(`${client.user.tag} is online and ready.`);
    client.user.setActivity(
      `${await global.botModel.count()} bots.`,
      {
        type: 3,
      }
    );
    }
};
