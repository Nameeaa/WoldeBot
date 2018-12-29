function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const Discord = require('discord.js');

const espriler = [
  "Adamın biri donmuş karısıda külot",
  "Bir adam kafadan atmış vücudu inek",
  "Bu erikson. Başka erik yok"
]
exports.run = function(client, message,args) {
  const espris = espriler[Math.floor(Math.random() * espriler.length)];
  let embed = new Discord.RichEmbed()
  .setTitle(`**Espri**`)
  .setColor('#BDFF00')
  .addField('Espri',espris)
  
  message.channel.send(embed)
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'espri', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirtilen kişinin minecraft özellikleri.', //açıklaması
  usage: 'espri' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz