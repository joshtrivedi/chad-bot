"use strict";

var _require = require('../config.json'),
    member_role = _require.member_role,
    timeout_role = _require.timeout_role;

var timeout = require('./timeout');

var ms = require('ms');

var regname = /(<@!)\d{18}(>)/;
module.exports = {
  name: "mute",
  description: "mute a user for a given amout of time",
  access: "moderators",
  execute: function execute(msg, args) {
    var content, channel, author, mainRole, muteRole, newArgs, taggedUser;
    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            content = msg.content, channel = msg.channel, author = msg.author;
            mainRole = msg.guild.roles.cache.find(function (daddy) {
              return member_role.includes(daddy.name.toLowerCase());
            });
            muteRole = msg.guild.roles.cache.find(function (bruh) {
              return timeout_role.includes(bruh.name.toLowerCase());
            });

            if (!(args.length == 1)) {
              _context.next = 6;
              break;
            }

            timeout.execute(msg, args);
            return _context.abrupt("return");

          case 6:
            if (args.length == 2) {
              newArgs = args[0] + " " + args[1];

              if (regname.test(newArgs)) {
                taggedUser = msg.mentions.members.first();
                taggedUser.roles.add(muteRole).then(msg.channel.send("<@!".concat(taggedUser.user.id, "> has been muted for ").concat(args[1])))["catch"](function (e) {
                  return console.log(e);
                });
                setTimeout(function () {
                  taggedUser.roles.remove(muteRole.id);
                }, ms(args[1]));
              } else {
                msg.channel.send('Please check if you followed the right format, `!mute @user time` \nThank you!');
              }
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};