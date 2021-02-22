"use strict";

var _require = require("discord.js"),
    Message = _require.Message;

var channels = ['785038193958453291', '776169814980821052'];
var pooprole = '813459718277169242';

module.exports = function (client) {
  client.on('message', function (msg) {
    var channel = msg.channel,
        author = msg.author,
        content = msg.content;

    if (!channels.includes(channel.id)) {
      return;
    }

    if (msg.member.roles.cache.find(function (r) {
      return r.name === "Boys";
    })) {
      if (msg.content.toLowerCase().includes("!poop add")) {
        console.log("hello");
        var txt = msg.content.toLowerCase();
        user_id = "<@!" + msg.content.substring(txt.indexOf("<@!") + 3, txt.indexOf(">")) + ">";

        try {
          var role = msg.member.guild.roles.cache.find(function (r) {
            return r.name === "Poop Squad";
          });

          if (!msg.member.roles.cache.find(function (r) {
            return r.name === "Poop Squad";
          })) {
            if (role) {
              msg.guild.members.cache.get(msg.author.id).roles.add(role);
              msg.react('👍');
            } else msg.channel.send('well something is wrong <@!675120965314805760> what did you do');
          } else msg.channel.send('you already an honorary poop squad member sire!');
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      console.log('nope');
    }
  });
};