"use strict";

var channels = [''];
var channel_id = '792527126511353866';

module.exports = function (client) {
  client.on('message', function (msg) {
    var author = msg.author,
        content = msg.content;

    if (msg.channel.type === "dm") {
      //console.log(msg.author);
      if (client.channels.cache.find(function (c) {
        return c.id === channel_id;
      })) {
        client.channels.cache.find(function (c) {
          return c.id === channel_id;
        }).send(msg.content);
      } else {
        console.log('no');
      }
    }
  });
};