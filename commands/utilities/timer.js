const { SlashCommandBuilder } = require('discord.js');
const { data } = require('./ping');

module.exports = { 
    data: new SlashCommandBuilder()
        .setName('timer')
        .setDescription('Start a timer for a specified amount of time.')
        .addIntegerOption(option => option.setName('duration').setDescription('The duration of the timer in seconds.').setRequired(true)),
    async execute(interaction) {
        const { duration } = interaction.options.getInteger('duration');
        await interaction.reply(`Timer started for ${duration} seconds.`);
        setTimeout(() => {
            interaction.followUp('Timer done!');
        }, duration * 1000);
    }  
} 
    