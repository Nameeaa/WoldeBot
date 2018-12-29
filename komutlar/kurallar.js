const Discord = require('discord.js');


exports.run = function(client, message) {
  let kurallar = new Discord.RichEmbed()
  .setTitle('Kurallar')
  .setColor('#DF0101')
  
  .addField('**Küfür**','Küfür tamamen yasaktır.')
  .addField('**Spam**','Spam yasaktır.')
  .addField('**Rahatsız edici paylaşımlar**','Rahatsız edici paylaşım yapmak yasaktır. (Cinsellik, korku,+18)')
  .addField('**Ahlak**','Ahlaka karşı davranışlar sergilemek yasaktır.')
  .addField('**Trol**','Trol aşırıya kaçılmadığı sürece yasak değildir.')
  .addField('**Müzik Botu**','Müzik botu eğer bir kanalda ise müzik botunu çağırmak yasaktır.')
  .addField('**Botları Buga Sokmak**','Botlara spam yapmak veya botları buga sokmak yasaktır.')
  .addField('**Bot Komutları**','Bot komutlarını #bot-komut kanalından başka bir kanala yazmak yasaktır.')
  message.channel.send(kurallar);
  
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['ping','p'], //farklı çağrılar ekledik
  permLevel: 4 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'kurallar', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir', //açıklaması
  usage: 'kurallar' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz