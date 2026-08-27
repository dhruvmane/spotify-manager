// HANDLING SLASH COMMANDS

import type { CacheType, Interaction } from "discord.js";
import { client } from "../app";

export default async function interactionCreate(interaction: Interaction) {
  if (!interaction.isRepliable()) return;
  if (!interaction.isChatInputCommand()) return;

  // RUN THE execute() IN THE ROUTE.TS FILE.
  const routeExec = client.commands.get(interaction.commandName!);
  await routeExec.execute(interaction);
}
