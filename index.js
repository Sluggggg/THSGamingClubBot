const { Client, Intents, message, Shard, MessageEmbed, VoiceChannel } = require('discord.js');
const { TOKEN, prefix } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS]});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    client.user.setActivity('In testing');
    console.log('Ready!');
});

/*client.on('guildMemberAdd', (guildMember) => {
    
    
    const DMChannel = await guildMember.createDM();

    await DMChannel.send({ embed : {
        color: ('#045715'),
        title: "Welcome!",
        description: "Welcome to the THS Gaming Club " + guildMember.user.username + "!",
        fields: [{
            name: "Guidlines: ",
            value: "1. All club-members must be VERIFIED in order to chat (only current Tigard High students may be verified). Verification can be achieved by fully completing form above and waiting for a president or representative to approve it.",
            value: "2. Any offense reported will be immediately reported to school, YOU ARE NOT ANONYMOUS",
            name: "Rules: ",
            value: "1. No use of offensive language of any kind.",
            value: "2. No hate speech or targeting of individuals/groups",
            value: "3. No doxxing or revealing of personal information",
            value: "4. No NSFW, this is an extension of the school",
            value: "5. Be respectful and LISTEN. No means no and stop means stop.",
            value: "6. No sending/promoting of malware or anything that could damage devices",
            value: "7. No ban evasion or impersonation",
            value: "8. No cheating of any kind"
        }],
        timestamp: Date.now(),
        footer: {
            icon_url: guildMember.user.avatarURL,
            text: "© Tigard High School Gaming Club 2021"
        }
    }});
});
*/

// Since nothing is really working or in the correct state right now, I am just going to put some ideas and maybe do some testing of certain things, though it likely will not work. 

client.on('messageCreate', message => {
    if (message.activity.bot) return;
    
    if (message.conent === `${prefix}ping`) {
        message.channel.send({ content : 'Pong!'});
    };
});

client.login(TOKEN);