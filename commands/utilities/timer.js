// commands/utilities/timer.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timer')
        .setDescription('Startet oder stoppt den Timer')
        .addStringOption(option =>
            option.setName('action')
                .setDescription('Die Aktion ausführen')
                .setRequired(true)),
    async execute(interaction) {
        const action = interaction.options.getString('action');

        if (action === 'start') {
            global.startTime = Date.now();
            await interaction.reply('Timer gestartet');
        } else if (action === 'stop') {
            if (!global.startTime) {
                await interaction.reply('Der Timer wurde noch nicht gestartet');
                return;
            }

            const elapsedTime = Date.now() - global.startTime;
            const seconds = Math.floor(elapsedTime / 1000);
            delete global.startTime;

            await interaction.reply(`Timer gestoppt. Vergangene Zeit: ${seconds} Sekunden`);
        }
    },
};