// HANDLING CLIENT INITIALIZATION
import type { Client } from "discord.js";

export default async function clientReady(client: Client) {
  console.log(`logged in as '${client.user?.tag} 🚀'`);
}