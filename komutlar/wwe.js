const Discord = require('discord.js');
const wwe = [
  "https://media.giphy.com/media/3ohc14ugDezsIuY9k4/giphy.gif",
  "https://media.giphy.com/media/3oFzmey87c4CWytqJW/giphy.gif",
  "https://media.giphy.com/media/26FfgonzyqqLWfjsA/giphy.gif",
  "https://media.giphy.com/media/1iPwQnmoxedx1mtW/giphy.gif",
  "https://media.giphy.com/media/l1J3OzUkGuj3ECW9W/giphy.gif",
  "https://media.giphy.com/media/26n6ThJAHI47J2hsk/giphy.gif"
];

exports.run = async(client, message) => {
  const wwes = wwe[Math.floor(Math.random() * wwe.length)];
  let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `**${message.author.tag}** senin için bir WWE gifi`,
            image: {
                url: wwes
            }
        }
    });
  
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'e', //adını belirledik (kullanmak için gereken komut)
  description: 'Wwe ', //açıklaması
  usage: 'e' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz