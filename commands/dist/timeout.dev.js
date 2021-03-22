"use strict";

var reg = /([a-zA-Z]) (\d+)/;
var regname = /(<@!)\d{18}(>)/;

var _require = require('../config.json'),
    moderator_role = _require.moderator_role,
    timeout_role = _require.timeout_role;

var mute = require('./mute');

module.exports = {
  name: 'timeout',
  description: 'gives the user mentioned a timeout role',
  execute: function execute(msg, args) {
    var content, author, channel, newargs, user, timeoutrole;
    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            content = msg.content, author = msg.author, channel = msg.channel;

            if (!(args.length == 2)) {
              _context.next = 4;
              break;
            }

            mute.execute(msg, args);
            return _context.abrupt("return");

          case 4:
            newargs = "";
            newargs += args[0];

            if (msg.member.roles.cache.find(function (m) {
              return moderator_role.find(function (f) {
                return f.includes(m.name.toLowerCase());
              });
            })) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return");

          case 8:
            if (regname.test(newargs)) {
              user = msg.mentions.members.first();
              timeoutrole = msg.guild.roles.cache.find(function (r) {
                return timeout_role.includes(r.name.toLowerCase());
              });

              try {
                user.roles.add(timeoutrole).then(msg.channel.send("<@!".concat(user.id, "> has been muted")));
              } catch (e) {
                console.log(e);
              }
            } else {
              msg.channel.send('Wrong format, please use format `!timeout user time`');
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};