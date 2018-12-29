const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let a = args.slice(' ').join(0)  
  
    const çekiliş = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Çekiliş yapıldı!", true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField('Çekiliş objesi',a)
    .addField('Çekilişi Kazanan', `<@${message.guild.members.random().id}>`)
    .setColor("RANDOM")
    .setDescription('')
    return message.channel.sendEmbed(çekiliş);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekilişyap"],
  permLevel: 3
};

exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş yapar.',
  usage: 'çekiliş'
};