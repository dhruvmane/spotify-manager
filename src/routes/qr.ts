import 'dotenv/config'
import { ChatInputCommandInteraction, SlashCommandBuilder, type Interaction } from "discord.js";
import { EmbedBuilder, AttachmentBuilder } from "discord.js";
import fs from 'node:fs'
import path from 'node:path'

const QR_CODE_PATH = path.join(import.meta.dirname, "..", "assets/qr/spotify_qr.png");
const QR = new AttachmentBuilder(QR_CODE_PATH, {
  name: "spotify_qr.png"
})
export const data = new SlashCommandBuilder()
  .setName('qr')
  .setDescription(`Get QR Code for UPI Payment.`);


export async function execute(interaction: ChatInputCommandInteraction) {
  if (!interaction.isRepliable()) return;
  if (!interaction.isChatInputCommand()) return;

  const embed = new EmbedBuilder().setImage("attachment://spotify_qr.png")
  
  let responseEmbed = [embed]
  
  await interaction.reply(
    {
      embeds: responseEmbed,
      files: [QR]
    }
  )
}