[Deutsch](#deutsch) | [English](#english)


## English
Here is the English content...

# Discord-ChallengerBot-30min ##
This Discord bot was developed with Node JS to practice programming and testing bot functions in Discord. The bot is currently equipped with a simple slash command that responds to the /ping command with "Pong". More slash commands are needed to realize the full potential of the bot.

# The Challenge
The challenge is to program another 'slash' command within 30 minutes. If the command works, create a pull request. So get started and expand the bot according to your ideas. I look forward to your ideas.

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






## Deutsch
Hier ist der deutsche Inhalt

# Discord-ChallengerBot-30min
Dieser Discord-Bot wurde mit Node JS entwickelt, um das Programmieren und Testen von Bot-Funktionen in Discord zu üben. Der Bot ist derzeit mit einem einfachen Slash-Befehl ausgestattet, der auf den /ping-Befehl reagiert und mit "Pong" antwortet. Weitere Slash-Befehle sind erforderlich, um das volle Potenzial des Bots zu realisieren.

# Die Herausforderung
Die Herausforderung besteht darin, innerhalb von 30 Minuten einen weiteren 'Slash'-Befehl zu programmieren. Wenn der Befehl funktioniert, erstellen Sie einen Pull Request. Also legen Sie los und erweitern Sie den Bot nach Ihren Vorstellungen. Ich freue mich auf Ihre Ideen.

# Einen neuen Slash-Befehl erstellen
Um einen neuen Slash-Befehl zu erstellen, müssen Sie die folgenden Schritte ausführen:

1. Erstellen Sie eine neue Datei im Verzeichnis `commands`. Der Dateiname sollte dem Befehl entsprechen, den Sie erstellen möchten (z.B. `mycommand.js`).

2. In dieser Datei müssen Sie ein Objekt exportieren, das die Eigenschaften `name`, `description` und `execute` hat. `name` ist der Name des Befehls, `description` ist eine kurze Beschreibung dessen, was der Befehl tut, und `execute` ist eine Funktion, die aufgerufen wird, wenn der Befehl ausgeführt wird.

Hier ist ein Beispiel:

```javascript
module.exports = {
    name: 'mycommand',
    description: 'Dies ist mein neuer Befehl',
    execute(interaction) {
        interaction.reply('Dies ist die Antwort meines Befehls');
    },
};