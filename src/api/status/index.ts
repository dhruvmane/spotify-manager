import type { Interaction } from "discord.js";
import { db } from '../../server/db/index.ts'
import { users } from '../../server/db/schema.ts'
import { eq } from 'drizzle-orm'
  
async function getData(userId: string) {
  try {
    const response = await db.select().from(users).where(eq(users.discordClientId, userId));
    return response
  } catch (e) {
    console.log(e);
  }
}

export default async function getStatus(interaction: Interaction) {
  const discordUserId = interaction.user.id;
  const userData = getData(discordUserId);
  return userData
}