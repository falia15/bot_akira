import { BaseCommandInteraction, Client, TextChannel as TextChannelDiscordJs } from "discord.js";
import { Command } from "../Command";
import VoiceChannel from './../class/GuessAnime/VoiceChannel';
import Game from './../class/GuessAnime/Game';
import Music from './../class/GuessAnime/Music';
import TextChannel from './../class/GuessAnime/TextChannel';

export const GuessAnimesOpenings: Command = {
    name: "guess-animes-openings",
    description: "Guess anime op",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {

        let voiceChannel = new VoiceChannel(interaction!.guild!);
        await voiceChannel.create();
        let connection = voiceChannel.join();
        // TODO check if exist before join

        let music = new Music();
        let game = new Game()
        let textChannel = new TextChannel();

        game.initTurn();

        let musicLink = game.getOpeningToGuess();
        music.play(musicLink!, connection);

        let answers = game.getAnswers();
        let messageContent = textChannel.getAnswersMessage(answers);

        //await interaction.reply(messageContent);
        let channel = interaction!.channel as TextChannelDiscordJs;
        channel.send(messageContent)
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