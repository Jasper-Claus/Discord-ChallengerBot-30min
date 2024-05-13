const { SlashCommandBuilder } = require('@discordjs/builders');

let words = ['Bumms', 'Nudel', 'Lustig', 'Keks', 'Fisch', 'Blubber', 'Wumms', 'Knall', 'Bunt', 'Quatsch', 'Zappel', 'Blitz', 'Hurra', 'Schlumpf', 'Wunder', 'Maus', 'Keks', 'Schnitzel', 'Bananen', 'Kartoffel'];

function generateFunnyName() {
  if (words.length === 0) {
    words = ['Bumms', 'Nudel', 'Lustig', 'Keks', 'Fisch', 'Blubber', 'Wumms', 'Knall', 'Bunt', 'Quatsch', 'Zappel', 'Blitz', 'Hurra', 'Schlumpf', 'Wunder', 'Maus', 'Keks', 'Schnitzel', 'Bananen', 'Kartoffel'];
  }

  const firstIndex = Math.floor(Math.random() * words.length);
  const firstName = words.splice(firstIndex, 1)[0];

  const secondIndex = Math.floor(Math.random() * words.length);
  const secondName = words.splice(secondIndex, 1)[0];

  const randomNumber = Math.floor(Math.random() * 100);
  
  return `${firstName}${secondName}${randomNumber}`;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('randomname')
    .setDescription('Generates a random funny name.'),
  async execute(interaction) {
    const funnyName = generateFunnyName();
    await interaction.reply(`your name is: ${funnyName}`);
  },
};