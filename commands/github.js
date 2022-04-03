const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('Link to gitHub repository'),
    async execute(interaction) {
        interaction.reply({
            content: 'https://github.com/Sluggggg/THSGamingClubBot',
            ephemeral: true
        });
    }
}