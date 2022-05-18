const { Client, Intents, Interaction } = require('discord.js');
const { token } = require('./config.json');
const { createAudioPlayer, createAudioResource , joinVoiceChannel, audioPlayer} = require('@discordjs/voice');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async (interaction : typeof Interaction) => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'music') {

		const connection = joinVoiceChannel({
			//channelId: interaction.channelId,
			channelId: 466944850919686147,
			guildId: interaction.guildId,
			adapterCreator: interaction.guild.voiceAdapterCreator,
		});
		console.log(interaction.guild.voiceAdapterCreator);

		const player = createAudioPlayer();
		const resource = createAudioResource('/home/falia/Downloads/86S2-OP1.webm');
		player.play(resource);

		// Subscribe the connection to the audio player (will play audio on the voice connection)
		const subscription = connection.subscribe(player);

		// subscription could be undefined if the connection is destroyed!
		if (subscription) {
			// Unsubscribe after 5 seconds (stop playing audio on the voice connection)
			setTimeout(() => subscription.unsubscribe(), 5_000);
		}
	}
});
client.login(token);


