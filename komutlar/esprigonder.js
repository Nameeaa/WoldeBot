const Discord = require('discord.js');

exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var channelID = "518320961850703873";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **wwöneri <mesaj>**");
	} else {
		
		var öneri = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Espri Gönder")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Espri", öneri)
		client.channels.get(channelID).send(öneri);
		message.delete()
    message.channel.send("Espriniz işleme alınmıştır! Teşekkür ederiz.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'esprigönder', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'esprigönder <mesaj>' 
};