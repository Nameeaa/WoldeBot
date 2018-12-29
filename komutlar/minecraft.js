function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const Discord = require('discord.js');
const rank = [
  "Demir",
  "Altın",
  "Zümrüt",
  "Obsidyen",
  "Elmas"]
const banlıserver = [
  "CubeCraft",
  "Hypixel",
  "CandyCraft",
  "CraftRise",
  "HiveMC",
  "Mineplex"
]
const dk = [
  "dakika",
  "saat",
  "saniye",
  "mili saniye"
]

exports.run = function(client, message,args) {
  let user = args.slice(0).join(' ');
  if(user.length < 1) return message.reply('Bir kişi belirt!')
  const ranks = rank[Math.floor(Math.random() * rank.length)];
  const banlıservers = banlıserver[Math.floor(Math.random() * banlıserver.length)];
  const dks= dk[Math.floor(Math.random() * dk.length)];
  let oynadığısaat = getRandomInt(400)
  let başarımsayısı = getRandomInt(50)
  
  let embed = new Discord.RichEmbed()
  .setTitle(`**Minecraft istatistikleri**`)
  .setColor('#BDFF00')
  .addField('**Kullanıcı**',`Sayın ${user}`)
  .addField('**Banlı olduğu sunucu**',`${banlıservers}`)
  .addField('**Rank**',ranks)
  .addField('**Oynadığı saat**',`${oynadığısaat} ${dks}`,)
  .addField('**Başarım sayısı**',başarımsayısı)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'minecraft', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirtilen kişinin minecraft özellikleri.', //açıklaması
  usage: 'minecraft' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz