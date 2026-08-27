import { SlashCommandBuilder, type Interaction } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName('status')
  .setDescription(`Get the status of your Spotify Subscription.`);

export async function execute(interaction: Interaction) {
  console.log('Someone asked to check status.')
}