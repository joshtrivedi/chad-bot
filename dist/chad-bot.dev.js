"use strict";

var _require = require('constants'),
    O_TRUNC = _require.O_TRUNC;

var Discord = require('discord.js');

var _require2 = require('dns'),
    EOF = _require2.EOF;

var _require3 = require('os'),
    userInfo = _require3.userInfo;

var bot = new Discord.Client();
var prefix = 'chad';
var tk = process.env.NOTHING_SPECIAL;
var polls_id = '785057197960593408';
var a = '785061567434981407';
var b = '785061577803169814';

var polls = require('./polls');

var reaction_role = require('./reaction-roles');

var F = '785180507846869032';
var testmessage_id = '785113963430936586';
var chadchannel = '792527126511353866';

var anon = require('./anon-response');

var booster = require('./booster');

var anon_react = require('./anon-react');

var random_responses = Array();
random_responses[0] = "don't @ me rn I'm sliding in some dms";
random_responses[1] = "I have no idea what you're talking about";
random_responses[2] = "disturb me another time, I'm trying to shave my balls";
random_responses[3] = "yo wuz good dawg";
random_responses[4] = "idk ask pras, he likes being a `know it all`";
random_responses[5] = "and you expect me to answer that?";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on('ready', function () {
  console.log('This bot is working');
  polls(bot);
});
bot.on('message', function (msg) {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
    var args = msg.content.slice(prefix.length + 1).split(/ +/);
    var command = args.shift().toLowerCase().trim();

    if (command == 'ping') {
      msg.channel.send('yes');
    }

    if (command == 'commands') {
      msg.channel.send('find out yourself im busy');
    }

    if (command == 'simp') {
      msg.channel.send('<:nou:776223420975284274>');
    }

    if (command == 'advice') {
      msg.channel.send("don   't be a bitch");
    }

    if (command == '' || command == 'hi') {
      var x = getRandomInt(random_responses.length);
      msg.channel.send(random_responses[x]);
    }
  }
});
bot.login(tk);