import { ChatInputCommandInteraction, SlashCommandBuilder, type Interaction } from "discord.js";
import embedBuilder from "../builders/embed";

export const data = new SlashCommandBuilder()
  .setName('status')
  .setDescription(`Get the status of your Spotify Subscription.`);

const responseEmbed = [embedBuilder(
  {
    title: "PAID",
    description: "Your Spotify Debt is Paid",
    type: "GREEN"
  }
)]

export async function execute(interaction: ChatInputCommandInteraction) {
  if (!interaction.isRepliable()) return;
  if (!interaction.isChatInputCommand()) return;
  console.log("interaction is called.")
  await interaction.reply(
    {
      embeds: responseEmbed
    }
  )
}