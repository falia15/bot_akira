const { MessageActionRow, MessageButton } = require('discord.js');

export default class TextChannel {
    getAnswersMessage(answers : Array<string>)
    {
        let answersButton = answers.map((item, index) => {
            return new MessageButton()
            .setCustomId(String(index))
            .setLabel(item)
            .setStyle('PRIMARY')
            
        });

        const row = new MessageActionRow()
        row.addComponents(answersButton)

        return {components: [row] };
    }
}