"use strict";

var _require = require('discord.js'),
    MessageAttachment = _require.MessageAttachment;

var _require2 = require('../config.json'),
    moderator_role = _require2.moderator_role;

module.exports = {
  name: "purge",
  description: "Delete certain number of messages",
  access: "moderators",
  execute: function execute(msg, args) {
    var num;
    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!args.length === 1)) {
              _context.next = 3;
              break;
            }

            msg.channel.send('Please enter only one argument!');
            return _context.abrupt("return");

          case 3:
            if (msg.member.roles.cache.find(function (m) {
              return moderator_role.find(function (f) {
                return f.includes(m.name.toLowerCase());
              });
            })) {
              num = args[0];
              if (isNaN(num)) msg.reply("the argument that you entered after the command isn't a number");else {
                msg.channel.bulkDelete(num, true)["catch"](function (err) {
                  console.error(err);
                  msg.channel.send('there was a problem pruning messages from this channel');
                });
              }
            } else {
              msg.channel.send('You need to have administrator privileges for that!');
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};