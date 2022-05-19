const { token } = require('./config.json');
import { Client, ClientOptions, Intents } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

console.log("Bot is starting...");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

ready(client);
interactionCreate(client);

client.login(token);