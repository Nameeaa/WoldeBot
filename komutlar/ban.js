
const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Kişi bulunamadı!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("ADMINISTRATOR'ları uyaramassın!");
    

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~**Ban**~")
    .setColor("#ff0000")
    .addField("Banlanan kişi", `${bUser} with ID ${bUser.id}`)
    .addField("Banlayan kişi", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banlandığı kanal", message.channel)
    .addField("Banlandıpı zaman", message.createdAt)
    .addField("Sebep", bReason);

    let banChannel = message.guild.channels.find(`name`, "ceza-takip-listesi");
    if(!banChannel) return message.channel.send("ceza-takip-listesi isminde bir kanal bulamadım!");

    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);
    message.channel.send(bUser +' banlandı')
    return;
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['BAN'], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'ban', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirtilen kişiyi banlar', //açıklaması
  usage: 'ban' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
