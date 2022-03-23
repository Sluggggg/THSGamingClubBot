require('dotenv').config();
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
};

client.once("ready", () => {
    console.log("Amythest is online.");

    const CLIENT_ID = client.user.id;

    const rest = new REST({
        version: '9'
    }).setToken(process.env.TOKEN);

    (async () => {
        try {
            if (process.env.ENV === 'production') {
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                    body: commands
                });
                console.log('Successfully registered commands globally.');
            } else {
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
                    body: commands
                });
                console.log('Successfully registered commands locally.');
            }
        } catch (err) {
            if (err) console.error(err);
        }
    })();
});

client.on('intactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;
    
    try {
        await command.execute(interaction);
    } catch(err) {
        if (err) console.error(err);

        await interaction.reply({
            content: 'An error occurred while executing that command.',
            emphemeral: true
        });
    }
});

client.login(process.env.TOKEN);

/* 
Ranked roles
level system
voice commands (in VCs / speech synthesis)
new video / live stream alerts
graphical user interface (web)
user stats
mini games (coding related?)
introduce new members
member only commands
showcase command (highlights project url)
music player
auto authenticate people if they enter a valid discord tag (read new submission in the google sheets, add verified discord role and remove unverified, then write accepted) bigquery??
*/