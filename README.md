# Discord-ChallengerBot-30min ##
This Discord bot was developed with Node JS to practice programming and testing bot functions in Discord. The bot is currently equipped with a simple slash command that responds to the /ping command with "Pong". More slash commands are needed to realize the full potential of the bot.

# The Challenge
The challenge is to program another 'slash' command within 30 minutes. If the command works, create a pull request. So get started and expand the bot according to your ideas. I look forward to your ideas.


# ´/commands` for the discord-bot`

| Command | Description |
| ------- | ----------- |
| /ping   | Responds with "Pong". This is a simple test command to check if the bot is responding. |
| /user   | Returns information about the calling user. Depending on the implementation, this can include the username, ID, role, and other relevant information. |
| /timer  | Starts, stops, or checks a timer. `/timer start` starts the timer, `/timer stop` stops the timer and displays the elapsed time, and `/timer check` displays the currently elapsed time since the start of the timer. |

# Creating a new Slash Command
To create a new slash command, you need to follow these steps:

1. Create a new file in the `commands` directory. The filename should correspond to the command you want to create (e.g., `mycommand.js`).

2. In this file, you need to export an object that has the properties `name`, `description`, and `execute`. `name` is the name of the command, `description` is a brief description of what the command does, and `execute` is a function that is called when the command is executed.

Here is an example:

```javascript
module.exports = {
    name: 'mycommand',
    description: 'This is my new command',
    execute(interaction) {
        interaction.reply('This is the response of my command');
    },
};


# ´/commands` for the discord-bot`

| Command | Description |
| ------- | ----------- |
| /ping   | Responds with "Pong". This is a simple test command to check if the bot is responding. |
| /user   | Returns information about the calling user. Depending on the implementation, this can include the username, ID, role, and other relevant information. |
| /timer  | Starts, stops, or checks a timer. `/timer start` starts the timer, `/timer stop` stops the timer and displays the elapsed time, and `/timer check` displays the currently elapsed time since the start of the timer. |


