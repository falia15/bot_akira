import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import VoiceChannel from './../class/GuessAnime/VoiceChannel';
import Game from './../class/GuessAnime/Game';

export const GuessAnimesOpenings: Command = {
    name: "guess-animes-openings",
    description: "Guess anime op",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {

        let voiceChannel = new VoiceChannel(interaction!.guild!);
        await voiceChannel.create();
        voiceChannel.join();

        let game = new Game()
        game.initTurn();
        // TODO check if exist before join



    }
};

/**
 * Folder class/GuessAnime/
 * VoiceChannel
 * - create
 * - destroy
 * - getName
 * - exist
 * 
 * Game
 * - create
 * - checkAnswer
 * 
 * Anime
 * - get
 * 
 * Music
 * - play
 * 
 * TextChannel
 * - create
 * - destroy
 * - sendAnimesAnswers
 * 
 * 
 * 
 * 
 */