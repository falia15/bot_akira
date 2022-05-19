import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import { joinVoiceChannel, DiscordGatewayAdapterCreator } from '@discordjs/voice';

export const GuessAnimesOpenings: Command = {
    name: "guess-animes-openings",
    description: "Guess anime op",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {

        const channel = await interaction!.guild!.channels.create("VC_NAME", {
            type: "GUILD_VOICE" 
        });

        joinVoiceChannel({
            channelId: channel.id,
            guildId: interaction!.guild!.id,
            adapterCreator: interaction!.guild!.voiceAdapterCreator as DiscordGatewayAdapterCreator,
        })

    }
};