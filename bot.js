const Discord = require ("discord.js")
const bot = new Discord.Client();
const config = require ('./config.json');

//Ready
bot.on("ready", () => {
  var Data = new Date();
  bot.user.setStatus('online');
  bot.user.setGame('');
	console.clear()
	console.log('___________________________________________________________________');
	console.log('Token: ' + config.token);
	console.log('___________________________________________________________________');
	console.log('Prefix: ' + config.prefix);
	console.log('___________________________________________________________________');
	console.log('Uptime: ' + bot.uptime + 's');
	console.log('___________________________________________________________________');
	console.log('Ping: ' + bot.ping + 'ms');
	console.log('___________________________________________________________________');
	console.log('Guilds: ' + bot.guilds.size);
	console.log('___________________________________________________________________');
	console.log('Hour: ' + Data.getHours() + ':' + Data.getMinutes() + ':' + Data.getSeconds());
	console.log('___________________________________________________________________');
});

//Message
bot.on('message', (message) => {
	if (message.content === config.prefix + "ping") {
 	        message.reply(`PONG! \nPing: **${bot.ping}** ms`);
    message.react("✅");
	}
	if (message.content === config.prefix + "pong") {
		message.reply(`PING! \nPing: **${bot.ping}** ms`);
		message.react("✅");
	}
  if (message.content === config.prefix + "help") {
    message.reply("Check your direct messages!");
    message.author.send(`**Help!** \n[**1.**] ${config.prefix}ping \n[**2.**] ${config.prefix}pong`);
	}
    if (message.content === config.prefix + "adminpanel") {
    	var Data = new Date();
        let role = message.guild.roles.find("name", "");
        let roleID = "";
        if(message.member.roles.has(role.id)) {
            message.channel.sendMessage(`**Admin Panel!** \n [**1.**] Use ${config.prefix}saveemoji to save server emoji!`);
        } else
            message.reply("You not have permission to use this command!");
            message.react("❌")
            }
	if (message.content === config.prefix + "saveemoji") {
	var Data = new Date();
        let role = message.guild.roles.find("name", "");
        let roleID = "";
		const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
        if(message.member.roles.has(role.id)){
			message.author.sendMessage(emojiList);
			message.channel.sendMessage("Your server emoji has been saved");
		} else
            message.reply("You not have permission to use this command!");
            message.react("❌")
			}
});

//Events
bot.on('guildMemberAdd', (guild, member) => {
		var Data = new Date();
		bot.channels.get("").message.send(member + " joined!");
		console.log(`${member} joined!`);
});
bot.on('guildMemberRemove', (guild, member) => {
		var Data = new Date();
		bot.channels.get("").message.send(member + " quit!");
		console.log(`${member} quit!`);
});

//Login
bot.login(config.token);
