import { Guild, VoiceChannel as VoiceChannelDiscordJS } from "discord.js";
import { joinVoiceChannel, DiscordGatewayAdapterCreator } from '@discordjs/voice';

export default class VoiceChannel {
    name: string;
    channel: VoiceChannelDiscordJS | null;
    guild: Guild;

    constructor(guild: Guild) 
    {
        this.guild = guild;
        this.name = "Anime OP Blind Test " + guild.id;
        this.channel = null;
    }

    exit(): boolean
    {
        // TODO
        return false;
    }

    // https://discord.js.org/#/docs/main/stable/class/Guild
    async create()
    {
        const channel = await this.guild.channels.create(this.name, {
            type: "GUILD_VOICE"
        });

        this.channel = channel;
    }

    join()
    {
        joinVoiceChannel({
            channelId: this.channel!.id,
            guildId: this.guild.id,
            adapterCreator: this.guild.voiceAdapterCreator as DiscordGatewayAdapterCreator,
        })
    }
}