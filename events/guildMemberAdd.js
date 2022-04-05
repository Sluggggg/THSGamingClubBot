module.exports = {
    name: 'guildMemberAdd',
    once: true,
    async execute (guildMember) {
        guildMember.guild.channels.cache.get('947029680450592788').send({ embed : {
            color: ('#1433A6'),
            title: 'Welcome!',
            description: 'Welcome to the test server!',
            fields: [{
                name: 'Test Channel',
                value: 'Just testing lol :)'
            }],
            timestamp: Date.now(),
            footer: {
                icon_url: guildMember.user.avatarURL,
                text: '© Bot Testing Server 2021-2022'
            }
        }});

        const DMChannel = await guildMember.createDM();

        await DMChannel.send('Just a test DM lol');
    }
}