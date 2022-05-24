import { createAudioPlayer, createAudioResource, AudioPlayer, VoiceConnection} from '@discordjs/voice';
const got = require('got');

export default class Music {
    player: AudioPlayer;

    constructor()
    {
        this.player = createAudioPlayer();
    }

    play(url : string, connection: VoiceConnection) : void
    {
        const stream = got.stream(url); // We get a Readable stream from URL with got
        const resource = createAudioResource(stream);
        this.player.play(resource);
        
        const subscription = connection.subscribe(this.player);

		if (subscription) {
			setTimeout(() => subscription.unsubscribe(), 20_000);
		}
    }
}

/**
 * Usefull source:
 * https://stackoverflow.com/questions/68773651/play-audio-from-url-discord-js-v13
 */