const Discord = require('discord.js');
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const kırık = [
    "Kafan kırıldı",
    "Kolun kırıldı",
    "Belin kırıldı",
    "Omzun Kırıldı",
    "Boynun kırıldı",
    "Öldün",
    "Hasarın Yok"
    


];
const renk = [
  "#fb00ff",
  "#00ecff",
  "#17ff00"
]
const birim = [
  "km",
  "m",
  "cm"
]
exports.run = function(client, message, args) {
    var kırıks = kırık[Math.floor(Math.random() * kırık.length)];
    var yükseklik = getRandomInt(100)
    var birims = birim[Math.floor(Math.random() * birim.length)];
    var renks = renk[Math.floor(Math.random() * renk.length)]
    var pogo = new Discord.RichEmbed()
    
    .setTitle('**Pogo Jump**')
    .setColor(renks)
    .addField('Zıpladğın Yükseklik',`${yükseklik} ${birims}`)
    .addField('Hasarın',kırıks)
    message.channel.send(pogo)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'pogo', 
  description: 'Pogo jump yaparsınız.',
  usage: 'pogo'
};