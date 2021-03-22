"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var _require = require('../config.json'),
    moderator_role = _require.moderator_role;

var Discord = require('discord.js');

var reg = /(<@!)\d{18}(>)/;
module.exports = {
  name: "ban",
  description: "ban a user with a reason specified",
  access: "moderators",
  execute: function execute(client, message, args) {
    var member, duration, reg, reason, banembed;
    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (message.member.hasPermission("BAN_MEMBERS")) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", message.channel.send('You can\'t use that!'));

          case 2:
            if (message.guild.me.hasPermission("BAN_MEMBERS")) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", message.channel.send('I don\'t have the right permissions.'));

          case 4:
            member = message.mentions.members.first();
            duration = args[1];
            reg = /d+/;
            if (!reg.test(duration)) duration = (_readOnlyError("duration"), 0);

            if (args[0]) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", message.channel.send('Please specify a user'));

          case 10:
            if (member) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/'));

          case 12:
            if (member.bannable) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine'));

          case 14:
            if (!(member.id === message.author.id)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", message.channel.send('Bruh, you can\'t ban yourself!'));

          case 16:
            reason = args.slice(2).join(" ");
            if (!reason) reason = 'Unspecified';
            member.ban({
              days: "".concat(duration),
              reason: "".concat(reason)
            })["catch"](function (err) {
              message.channel.send('Something went wrong');
              console.log(err);
            });
            banembed = new Discord.MessageEmbed().setTitle('Member Banned').setThumbnail(member.user.displayAvatarURL()).addField('User Banned', member).addField('Kicked by', message.author).addField('Reason', reason).setFooter('Time kicked', client.user.displayAvatarURL()).setTimestamp();
            message.channel.send(banembed);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};