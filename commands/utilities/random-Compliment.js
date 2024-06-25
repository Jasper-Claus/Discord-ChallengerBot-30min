const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mystery')
        .setDescription('a little encouragement'),
    async execute(interaction) {
        await interaction.reply('you are beautiful today ❤');
    },
};


