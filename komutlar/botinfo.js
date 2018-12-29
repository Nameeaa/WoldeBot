const Discord = require('discord.js');


exports.run = function(client, message) {
    const botinfo = new Discord.RichEmbed()
      .setTitle("Bot Özellikleri")
      .setColor('#f0ff00')
      .addField('Bot ismi', client.user.username)
      .addField('Yapımcı', '@Ed#3360')
      .addField('Botun Pingi', client.ping + 'ms!')
      .addField('Hizmet verdiği sunucu sayısı',client.guilds.size)
      .addField('Hizmet verdiği kanal sayısı',client.channels.size)
      .addField('Hizmet verdiği kişi sayısı',client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString())
      
    message.channel.send(botinfo);
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['botinfo','BOTİNFO'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'Bot info', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun infosunu gösterir', //açıklaması
  usage: 'botinfo' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz