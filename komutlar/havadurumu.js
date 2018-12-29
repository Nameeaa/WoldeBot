const Discord = require('discord.js');
const hava = require('weather-js')

exports.run = function(client, message, args) {
  hava.find({search: args.join(" "), degreeType: 'C'}, function (err, result) {
    if (err) message.chanel.send(err);
    var current = result[0].current;
    var location = result[0].location;
    
    const embed = new Discord.RichEmbed()
    .setTitle(`**${current.skytext}**`)
    .setAuthor(current.observationpoint)
    .setThumbnail(current.imageURL)
    .setColor(0x00AE86)
    .addField('Saat dilimi',location.timezone,true)
    .addField('Derece Tipi',location.degreetype,true)
    .addField('Sıcaklık',`${current.temperature} derece`,true)
    .addField('Hissedilen',`${current.feelslike} derece`,true)
    .addField('Rüzgarlar',current.winddisplay,true)
    .addField('Nem',current.humidity+'%',true)
    message.channel.send(embed);
  })
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['hava'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'havadurumu', //adını belirledik (kullanmak için gereken komut)
  description: 'hava durumu', //açıklaması
  usage: 'havadurumu' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz