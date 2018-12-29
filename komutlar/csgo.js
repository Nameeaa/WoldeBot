function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const Discord = require('discord.js');
const rank = [
  "Silver 1",
  "Siler 2",
  "Silver 3",
  "Silver 4",
  "Silver 5",
  "Nova 1",
  "Nova 2",
  "Nova 3",
  "Keleş",
  "Çift keleş",
  "Global",
  "Global elite"
]

const dk = [
  "dakika",
  "saat",
  "saniye",
  "mili saniye"
]
const noobluk = [
  "Ak-47",
  "M4A1-S",
  "Deagle",
  "Usp-s",
  "P90",
  "Flaş bombası"
]
exports.run = function(client, message,args) {
  let user = args.slice(0).join(' ');
  if(user.length < 1) return message.reply('Bir kişi belirt!')
  const ranks = rank[Math.floor(Math.random() * rank.length)];
  const saat = getRandomInt(30)
  const dks= dk[Math.floor(Math.random() * dk.length)];
  let oynadığısaat = getRandomInt(400)
  let başarımsayısı = getRandomInt(50)
  const noobluks= noobluk[Math.floor(Math.random() * noobluk.length)];
  let embed = new Discord.RichEmbed()
  .setTitle(`**Minecraft istatistikleri**`)
  .setColor('#BDFF00')
  .addField('**Kullanıcı**',`Sayın ${user}`)
  .addField('**Rekabetçide banlı olduğu saat**',`${saat} saat`)
  .addField('**Rank**',ranks)
  .addField('**Noobluk alanı**',noobluks)
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
  name: 'csgo', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirtilen kişinin csgo özellikleri.', //açıklaması
  usage: 'csgo' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz