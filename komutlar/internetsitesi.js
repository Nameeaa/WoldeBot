const Discord = require('discord.js');


exports.run = function(client, message) {
  message.channel.send('Botumuzun web sitesi: https://willywonkadcbot.glitch.me')
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'internetsitesi', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir', //açıklaması
  usage: 'internetsitesi' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz