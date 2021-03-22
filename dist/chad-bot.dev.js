"use strict";

var Discord = require('discord.js');

var dotenv = require('dotenv');

dotenv.config();
var bot = new Discord.Client();
var tk = process.env.NOTHING_SPECIAL;

var _require = require('./config.json'),
    prefix = _require.prefix;

var polls = require('./polls');

var F = '785180507846869032';

var fs = require('fs');

bot.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./commands/').filter(function (file) {
  return file.endsWith('.js');
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = commandFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var file = _step.value;

    var command = require("./commands/".concat(file));

    bot.commands.set(command.name, command);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on('ready', function () {
  console.log('This bot is working');
  polls(bot);
});
bot.on('message', function (msg) {
  if (msg.content.toLowerCase() === 'f') return msg.reply('🇫');
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  var args = msg.content.slice(prefix.length).split(/ +/);
  var command = args.shift().toLowerCase();

  if (command === 'ping') {
    bot.commands.get('ping').execute(msg);
  } else if (command === 'help' || command === 'commands') {
    var _commandFiles = fs.readdirSync('./commands/').filter(function (file) {
      return file.endsWith('.js');
    });

    if (args[0] === 'filter') {
      switch (args[1]) {
        case 'name':
          msg.channel.send('Do !commands and you will find the name of all commands');
          break;

        case 'access':
          var filtered_everyone = '**Commands accessible to everyone:** \n';
          var filtered_mods = '**Commands accessible to mods:** \n';
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _commandFiles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var file = _step2.value;

              var _command = require("./commands/".concat(file));

              if (_command.access === 'everyone') {
                filtered_everyone += "`" + _command.name + " `: " + _command.description + "\n";
              } else if (_command.access === 'moderators') {
                filtered_mods += "`" + _command.name + " `: " + _command.description + "\n";
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          msg.channel.send(filtered_everyone);
          msg.channel.send(filtered_mods);
          break;

        default:
          msg.channel.send('wrong arguments, please enter either `!commands filter name` or `!commands filter access`');
          break;
      }

      return;
    }

    var noOfCommands = "Available commands: \n";
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = _commandFiles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _file = _step3.value;

        var _command2 = require("./commands/".concat(_file));

        noOfCommands += _command2.name + " : " + _command2.description + " : ` access : " + _command2.access + "`\n";
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    msg.channel.send(noOfCommands);
  } else if (command === 'purge') {
    bot.commands.get('purge').execute(msg, args);
  } else if (command === 'mute') {
    bot.commands.get('mute').execute(msg, args);
  } else if (command === 'ban') {
    bot.commands.get('ban').execute(bot, msg, args);
  } else if (command === 'compliment') {
    bot.commands.get('compliment').execute(msg, args);
  } else if (command === 'mv' || command === 'motivation') {
    bot.commands.get('motivation').execute(msg, args);
  }
});
bot.login(tk);