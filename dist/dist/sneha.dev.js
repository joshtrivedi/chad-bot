"use strict";

var channels = ['806232333342081134'];
var josh_id = '675120965314805760';
var sneha_id = '728195817558638692';

module.exports = function (client) {
  client.on('message', function (msg) {
    var channel = msg.channel,
        author = msg.author,
        content = msg.content;

    if (!channels.includes(channel.id)) {
      return;
    }

    if (msg.author.id === sneha_id && msg.content.toLowerCase() === "hi josh") {
      msg.reply("I'm sure he's supposed to say Hi Sneha");
    }

    if (msg.author.id === josh_id && msg.content === "hi sneha") {
      msg.reply("capital S josh...");
    }

    if (msg.author.id === josh_id && msg.content === "hi Sneha") {
      msg.reply("that's much better, hi Jo-, wait I'm not Sneha");
    }
  });
};