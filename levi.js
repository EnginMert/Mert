const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get('http://boost-aktif.glitch.me/');
    }, 3000);
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

const levi = new Discord.Client();

levi.on("ready", () => {
  levi.channels.get("834969824014368768").join(834969824014368768);// MAİN DOSYAYA ATILCAK 
})

levi.login("NzcwNzY2NjAzMDIwMjcxNjU2.YISdEQ.9wNN2hgdU3NE1gtsIX3NKkN2u38");




