// MAIN ENDPOINT OF client

import 'dotenv/config'
import { REST, Routes, GatewayIntentBits } from "discord.js"
import { Collection } from "discord.js"           
import { SpotifyManagerClient } from './client.ts'

const TOKEN = process.env.TOKEN
export const client = new SpotifyManagerClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessageTyping,
  ]
})
client.commands = new Collection();
const rest = new REST({ version: '10' }).setToken(TOKEN!)

// EVENT HANDLERS
import messageCreateEventHandler from './handlers/messageCreate.ts';
import clientReady from './handlers/onReady.ts';
import interactionCreate from './handlers/interactionCreate.ts';

// HANDLER PLUGINS
client.on('messageCreate', messageCreateEventHandler);
client.on('clientReady', clientReady);
client.on('interactionCreate', interactionCreate);


// CLIENT ASYNCHRONOUS INITIALISATION
async function main() {
  await client.getAllRoutes();
  const commandData = client.commands.map(command => command.data.toJSON());
  await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.TESTING_GUILD_ID!), {
    body: commandData
  })

  // client TOKEN INSERTION
  client.login(TOKEN)
}

main()