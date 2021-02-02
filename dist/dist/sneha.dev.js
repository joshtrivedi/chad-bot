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

    if (msg.content === "hi josh") {
      console.log(msg.author.id);
    }
  });
};