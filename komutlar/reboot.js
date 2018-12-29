const Discord = require('discord.js');


exports.run = function(client, message) {
    
    message.channel.send('Bot yeniden başlatılıyor').then(msg => {
        console.log("Bot yeniden başlatılıyor....");
        process.exit(0);

    });
    
    
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['reboot','REBOOT','dur','DUR'], //farklı çağrılar ekledik
  permLevel: 4 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'reboot', //adını belirledik (kullanmak için gereken komut)
  description: 'Bota reboot atar', //açıklaması
  usage: 'reboot' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz