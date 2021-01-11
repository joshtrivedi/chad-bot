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
var tk = 'Nzg1MDMyMTM2MjgwNzY4NTEy.X8x8Jg.cQqfI19iYknEAod2deXzmRLV-24';
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

bot.on('ready', function () {
  console.log('This bot is working');
  polls(bot);
  booster(bot);
  anon(bot);
  reaction_role(bot);
  anon_react(bot);
});
bot.on('message', function (msg) {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  if (msg.content.startsWith(prefix)) {
    var args = msg.content.slice(prefix.length + 1).split(/ +/);
    var command = args.shift().toLowerCase().trim(); //console.log(command);

    if (command == 'ping') {
      msg.channel.send('yes');
    }

    if (command == 'commands') {
      msg.channel.send('find out yourself im busy');
    }

    if (command == 'simp') {
      msg.channel.send('<:nou:776223420975284274>');
    }

    if (command == 'hi') {
      msg.channel.send('yes');
    }

    if (command == 'f') {
      msg["delete"]();
      msg.reply('🇫');
    }

    if (command == 'advice') {
      msg["delete"]();
      msg.channel.send("don't be a bitch");
    }

    if (command == 'pack') {
      msg["delete"]();
      msg.channel.send("we pack our bags and leave");
    }

    if (command == 'p') {
      msg["delete"]();
      msg.channel.send("sup fuckers, whachu gon do, ban me?");
    }
  }
});
/*bot.on('nitroBoost' , (booster)=>{
    bot.channels.get('785042648511021057').send(`${booster} boosted the server`)
    if(booster.roles.has('784976884353728512')){
        bot.channels.get('785042648511021057').send('tag found');
    }else{
        bot.channels.get('785042648511021057').send('tag not found');
    }
})*/

bot.login(tk);