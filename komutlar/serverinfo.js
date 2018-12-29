const Discord = require('discord.js');


exports.run = function(client, message) {
    const sicon = message.guild.displayAvatarURL
    const serverözellikleri = new Discord.RichEmbed()
      .setTitle('Server Özellikleri')
      .setColor('#d500ff')
      .addField('Server ismi', message.guild.name)
      .addField('Kurulum Tarihi',message.guild.createdAt)
      .addField('Katıldığın Tarih',message.member.joinedAt)
      .addField('Kişi Sayısı',message.guild.memberCount)
    
    message.channel.send(serverözellikleri);
};
    
    

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['serverinfo','SERVERİNFO'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'Server info', //adını belirledik (kullanmak için gereken komut)
  description: 'Server infosunu verir', //açıklaması
  usage: 'serverinfo' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz