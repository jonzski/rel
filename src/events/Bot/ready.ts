import { Client } from "discord.js";
import { config } from "../../config";
const token = config.TOKEN;

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
  });

client.once("ready", () => {
    console.log("Rel is ready! 🤖");
  });

client.login(token);

  