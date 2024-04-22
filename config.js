module.exports = {
    clients: {
        token: '',
        prefix: '.',
        activity: 'mizuki',
        name: 'mizuki',
        logo: 'https://cdn.discordapp.com/attachments/1065584990533996584/1086659928099409961/pixiz-18-03-2023-14-41-24.jpg',
        embedColor: '#00a5ff'
    },

    opt: {
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
