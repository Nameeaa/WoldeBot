const Discord = require('discord.js');


exports.run = function(client, message) {
  message.channel.send("**"+ "https://is.gd/J9gZh0" + "**");
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['invite','davet'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'davetlinki', //adını belirledik (kullanmak için gereken komut)
  description: 'Davet Linki atar', //açıklaması
  usage: 'davet' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz