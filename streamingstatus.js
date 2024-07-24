client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // streaming activity
    client.user.setPresence({
        activities: [{
            name: 'example here',
            type: ActivityType.Streaming,
            url: 'https://twitch.tv/{username}'
        }],
        status: 'online'
    });

    console.log('Bot activity set to STREAMING');
});
