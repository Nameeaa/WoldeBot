const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('Bir uzunluk belirt. **Doğru Kullanım**: >şifre <uzunluk>')
    if(uzunluk > 2000) return message.reply("Az yavaş dayı 2000 karakter limiti var Discord'da")


    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })
    message.channel.send('Üretilen şifre özelden gönderildi')
    message.author.send(password);
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'şifre', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};