 const Discord = require("discord.js");
 const client = new Discord.Client();
 let préfix = "!";

 client.on("ready", function() {
     client.user.setGame("s'occupe du café !");
     console.log("Bot Connecté");
 })

 client.login("NTU3NjIyOTM3NTg3Mjg2MDE2.XdL2xw.K2E0DT-Xrbe3K94_YQjvWzsebG4");
