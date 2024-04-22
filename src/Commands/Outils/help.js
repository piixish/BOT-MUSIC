const { EmbedBuilder } = require("discord.js");

exports.help = {
    name: 'help'
};

exports.run = async (bot, message) => {
    const Embed = new EmbedBuilder()
        .setColor(bot.config.clients.embedColor)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo });

    message.delete().then(() => {
        message.channel.send({
            embeds: [
                Embed
                .setTitle('**Mes commandes**')
                .setDescription("➜ back: Pour retourner en arrière\n\n➜ clear: Pour clear la queue\n\n➜ jump: Pour passer une musique\n\n➜ nowplaying: Pour voir la musique en cours de lecture\n\n➜ pause: Pour faire une pause dans la musique\n\n➜ play: Pour jouer une musique\n\n➜ resume: Pour relancer la musique\n\n➜ shuffle: Pour mélanger les musique\n\n➜ skip: Pour passer la musique\n\n➜ stop: Pour arrêter la musique\n\n➜ volume: Pour changer le volume de la musique")
            ]
        });
    });
};
