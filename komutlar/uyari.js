
const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let uUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!uUser) return message.channel.send("Kişi bulunamıyor");
    let uReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("ADMINISTRATOR'ları uyaramassın!");
    

    let uyarıEmbed = new Discord.RichEmbed()
    .setDescription("~**Ban**~")
    .setColor("#ff0000")
    .addField("Uyarı alan kişi", `${uUser} with ID ${uUser.id}`)
    .addField("Uyarı veren kişi", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Uyarıldığı kanal", message.channel)
    .addField("Uyarıldığı zaman", message.createdAt)
    .addField("Sebep", uReason);

    let uyarıChannel = message.guild.channels.find(`name`, "ceza-takip-listesi");
    if(!uyarıChannel) return message.channel.send("ceza-takip-listesi isminde bir kanal bulamadım!");

    
    uyarıChannel.send(uyarıEmbed);
    message.channel.send(uUser +'uyarıldı!')
    return;
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['UYAR'], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'uyar', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirtilen kişiyi uyarır', //açıklaması
  usage: 'uyar' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
