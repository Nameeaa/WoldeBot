const Discord = require('discord.js');

exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var channelID = "518320481674199052";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **wwöneri <mesaj>**");
	} else {
		1
		var öneri = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
		
		client.channels.get(channelID).send(öneri);
    message.delete()
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'öneri <mesaj>' 
};
