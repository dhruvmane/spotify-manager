import { EmbedBuilder } from 'discord.js';

enum EmbedContentType {
  "RED" = "#C43F23",
  "YELLOW" = "#E3C23D",
  "GREEN" = "#23C45B",
}

interface IEmbedBuilder {
  title: string,
  description: string,
  type: "GREEN" | "RED" | "YELLOW",
}

export default function embedBuilder( userEmbedContent: IEmbedBuilder ) {

  const embed = new EmbedBuilder()
    .setTitle(userEmbedContent.title)
    .setDescription(userEmbedContent.description)
    .setColor(EmbedContentType[userEmbedContent.type])
    .setThumbnail('https://www.svgrepo.com/show/451516/checkbox-checked.svg')

  return embed;
}
