import { ChatInputCommandInteraction, SlashCommandBuilder, type Interaction } from "discord.js";
import embedBuilder from "../builders/embed";
import getStatus from '../api/status/index.ts'

export const data = new SlashCommandBuilder()
  .setName('status')
  .setDescription(`Get the status of your Spotify Subscription.`);


export async function execute(interaction: ChatInputCommandInteraction) {
  if (!interaction.isRepliable()) return;
  if (!interaction.isChatInputCommand()) return;

  let responseEmbed = [embedBuilder(
    {
      title: "PAID",
      description: "Your Spotify Debt is Paid",
      type: "GREEN"
    }
  )]
  
  await interaction.reply(
    {
      embeds: responseEmbed
    }
  )
}