const ms = require("ms");
const Discord = require('discord.js');


exports.run = async function(client, message, args) {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply(tomute + "bulunamıyor...");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(tomute + " susturamassın. "+ tomute +" mesajları yönetme yetkisine sahip!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){  
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bir zaman belirt <ms cinsinden>");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> mutelendi ${ms(ms(mutetime))}!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> mutesi kalktı!`);
  },ms(mutetime));
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['MUTE'], //farklı çağrılar ekledik
  permLevel: 2 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'mute', //adını belirledik (kullanmak için gereken komut)
  description: 'Mute atar', //açıklaması
  usage: 'mute' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
