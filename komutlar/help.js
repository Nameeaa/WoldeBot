const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
exports.run = function(client, message,args) {
    let a = args.join(' ').slice(0);
    if (a === 'moderatör') {
    const helpmoderatör = new Discord.RichEmbed()
      .setDescription('Moderatör Komutları')
      .setColor('#3eff00')
      .addField(prefix+'ban <kişi> <sebep>','Kişiyi banlar')
      .addField(prefix+'kick <kişi> <sebep>','Kişiyi kickler')
      .addField(prefix+'mute <kişi> <zaman (ms türünde)>','Kişiyi belirlenen zaman içerisinde susturur')
      .addField(prefix+'uyar <kişi> <sebep>','Kişiyi uyarır');
    message.channel.send(helpmoderatör);
    }
    
    if(a === 'eğlence'){
      const helpeğlence = new Discord.RichEmbed()
      .setTitle('**Komutlar**')
      .setColor('#3eff00')
      .addField(prefix+'**8ball**','8ball oynar')
      .addField(prefix+'**oyunseç**','Oyun seçer')
      .addField(prefix+'**pogo**','Pogo jump yaparsınız')
      .addField(prefix+'**stresçarkı**','Stres çarkı çevirir')
      .addField(prefix+'**emojiyazı**','Yazınızı emojiye çevirir')
      .addField(prefix+'**yazıtura**','Yazı-Tura atar')
      .addField(prefix+'**slots**','Slots oynar')
      .addField(prefix+'**minecraft**','Belitrilen kişinin minecraft özelliklerini gösterir')
      .addField(prefix+'**csgo**','Belitrilen kişinin csgo özelliklerini gösterir')
      .addField(prefix+'**espri**','Espri yapar')
      .addField(prefix+'**esprigönder**','Esprinizi yapımcıya gönderir')
      .addField(prefix+'**e**','WWE gifi gönderir.')
      
      message.channel.send(helpeğlence)
    }
    if(a===''){
    const help = new Discord.RichEmbed()
      .setTitle('Komutlar')
      .setColor('#3eff00')
      .addField(prefix+'**ping**','Botun pingini gösterir' )
      .addField(prefix+'**avatarım**','Avatarınızı gönderir')
      .addField(prefix+'**davet**','Botun kısaltılmış davet linkini atar.')
      .addField(prefix+'**help moderatör**','Moderatör komutlarını gösterir')
      .addField(prefix+'**help eğlence**','Eğlence komutlarını gösterir')
      .addField(prefix+'**öneri**','Önerinizi gönderir')
      .addField(prefix+'**help yardımcı**','Yardımcı Komutları Gösterir')
      .addField(prefix+'**internetsitesi**','Botun internet sitesinin linkini verir')
      
    message.channel.send(help);
    }
    if(a === 'yardımcı') {
      let helpyardımcı = new Discord.RichEmbed()
      .setTitle('**Komutlar**')
      .setColor('#3eff00')
      .addField(prefix+'**şifre**','Rasgele Şifre Üretir')
      .addField(prefix+'**serverinfo**','Server hakkında bilgi verir')
      .addField(prefix+'**botinfo**','Bot hakkında bilgi verir.')
      .addField(prefix+'**sunucuico**','Sunucu Resmini Gönderir!')
      .addField(prefix+'**hava <Bölge>**','Bulunduğunuz bölgenin hava durumunu gönderir.')
      .addField(prefix+'**hesapla <işlem>**','Söylediğiniz işlemi yapar')
      .addField(prefix+'**çekiliş <çekiliş objesi>**','Sunucunuzda Çekiliş Yapar')
      message.channel.send(helpyardımcı)
    }
};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['help','HELP','yardım','YARDIM'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'help', //adını belirledik (kullanmak için gereken komut)
  description: 'Bot yardımı', //açıklaması
  usage: 'help' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
