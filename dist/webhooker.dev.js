"use strict";

module.exports = function (client) {
  client.on('message', function (msg) {
    var channel = msg.channel,
        author = msg.author;

    if (!channels.includes(channel.id)) {
      return;
    }
  });
};