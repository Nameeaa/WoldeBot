const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const sayi = args.slice(0).join(' ');

    if(sayi.length < 1) {
       return message.reply("Silmem için bir miktar belirt");
    }
    if(sayi > 100) {
       message.reply("100'den fazla mesaj silemem!")
    }else {
            
            message.channel.bulkDelete(sayi);
        message.channel.send("**" + sayi + "**" + " Mesaj silindi!").then(msg => {
            msg.delete(5000);
    
        });
    }   
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'temizle', //adını belirledik (kullanmak için gereken komut)
  description: 'Chati temizler', //açıklaması
  usage: 'temizle' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz