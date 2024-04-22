// https://imgur.com/a/AIvJOJk

const { SlashCommandBuilder } = require('discord.js');

function createRandomString(length) {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
  }

async function isFetchOk(url) {
    try {
        const response = await fetch(url);
		if (response.headers.get("content-length") != 503) {
			return response.ok; // This will be true if the response status is 200-299
		}
		else { return false
		}
    } catch (error) {
        console.error(`Error in fetch: ${error}`);
        return false;
    }
}

async function fetchUntilOk(baseURL, stringLength) {
	let isOk = false;
	let url = null;

    while (!isOk) {
		// setTimeout(async function () { }, 1000);
		url = baseURL + createRandomString(stringLength) + ".jpeg"
		console.log(url);
		isOk = await isFetchOk(url);
		console.log(isOk);
    }

    return url;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('funnypic')
		.setDescription('Generates a funny picture from imgur'),
	async execute(interaction) {
		var url = await fetchUntilOk("https://i.imgur.com/", 5)
		console.log(url)
		await interaction.reply(url.toString());
	},
};