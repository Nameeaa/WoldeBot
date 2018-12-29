const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;



module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(prefix + 'help');
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
module.exports = client => {
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı Üstadım.');

    var Games = [

        "wwhelp",
        "wwpogo",
        "wwbotinfo ",
        "ww8ball ",
        "wwtemizle ",
        "wwmute ",
        "wwinvite",
        "wwping",
        "wwsay",
        
        `${client.users.size} Kullanıcıya Hizmet Ediyoruz`,
        
        `${client.guilds.size} Sunucuya Hizmet Ediyoruz`,
        
        



        `Yapımcım Hılawla`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

      client.user.setGame(Games[random], "https://www.youtube.com/channel/UCjqn3X2cRYSl4HiVL9ZxmQg?view_as=subscriber");
        }, 2 * 2500);

}; 