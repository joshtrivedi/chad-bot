"use strict";

var channels = ['776161181681451028'];

module.exports = function (client) {
  client.on('message', function (msg) {
    var channel = msg.channel,
        content = msg.content,
        author = msg.author;

    if (!channels.includes(channel.id)) {
      return;
    }

    if (msg.member.roles.cache.find(function (r) {
      return r.name === "Sugar Daddy";
    })) {
      msg.channel.send('hi sugar daddy');
    } else {
      msg.channel.send('you dont have the role required');
      return;
    }
  });
};