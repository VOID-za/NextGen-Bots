const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: 3000,
  staff: [
    "250486950828441602",
    "250486950828441602",
    "250486950828441602",
    "250486950828441602",
    "250486950828441602"
  ],
  owners: ["250486950828441602"],
  developers: ["250486950828441602", ""],
  betatesters: ["250486950828441602"],
  designers: ["250486950828441602"],
  mongo: process.env.mongo,
  bot: {
    id: "779452349235986432",
    prefix: "b!",
    secret: process.env.secret,
    redirect: "http://localhost:3000/auth/callback",
    token: process.env.token,
  },
  servers: {
    id: "741758405550669845",
    prefix: "s!",
    apikey: process.env.apikey,
    token: process.env.stoken,
  },
  guilds: {
    main: "1132078542860070984",
    testing: "1132078542860070984",
  },
  roles: {
    mod: "1132078542881038336",
    webmod: "1132078542881038337",
    admin: "1132078542881038337",
    developer: "1132078542881038337",
    partner: "",
    bots: "1132078542860070986",
    bottester: "1132078542881038336",
    members: "1132078542860070987",
    botsintesting: "1132082895683584030",
  },
  levels: {
    five: "1007058570879180851",
  },
  channels: {
    generalChat: "1132078543686348910",
    weblogs: "1132081441333837824",
    levelup: "1132081441333837824",
    modlogs: "1132081441333837824",
    reportlogs: "1132081441333837824",
    leaderboardC: "1132081441333837824",
    leaderboardM: "1132081441333837824",
    testingcategory: "1132078543862505652",
  },
  tags: {
    servers: [
      "Community",
      "Development",
      "Technology",
      "Social",
      "Roleplay",
      "Gaming",
      "Fun",
      "Emoji",
      "Streaming",
      "Anime",
      "E-Sport",
      "Meme",
      "Music",
    ],
    bots: [
      "Moderation",
      "Fun",
      "Economy",
      "Leveling",
      "Verification",
      "Web-Dashboard",
      "Utilities",
      "Logging",
      "Music",
      "Anime",
      "Memes",
      "Gaming",
      "RPG",
      "Crypto",
      "Welcomer",
      "Reaction-Roles",
      "24-7",
      "Social",
      "Ticket",
      "Youtube",
      "Twitch",
      "Emoji",
    ],
  },
  webhooks: {
    error_logs: {
      enabled: true,
      webhook: process.env.errorLogs,
    },
  },
};