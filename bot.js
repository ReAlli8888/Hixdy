const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523116177669750794")
setInterval(function() {
channel.send(`Credit Farm and Attack :>`);
}, 30)
})

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
