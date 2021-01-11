const { O_TRUNC } = require('constants');
const Discord = require('discord.js');
const {
    EOF
} = require('dns');
const {
    userInfo
} = require('os');
const bot = new Discord.Client();
const prefix = 'chad';
const tk = 'Nzg1MDMyMTM2MjgwNzY4NTEy.X8x8Jg.cQqfI19iYknEAod2deXzmRLV-24';

const polls_id = '785057197960593408';
const a = '785061567434981407';
const b = '785061577803169814';
const polls = require('./polls');
const reaction_role = require('./reaction-roles');
var F = '785180507846869032';
var testmessage_id = '785113963430936586';
var chadchannel = '792527126511353866';
var anon = require('./anon-response');
var booster = require('./booster');
var anon_react = require('./anon-react');
bot.on('ready', () => {
    console.log('This bot is working');
    polls(bot);
    booster(bot);
    anon(bot);
    reaction_role(bot);
    anon_react(bot);
})

bot.on('message', msg => {

    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    if (msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length + 1).split(/ +/);
        const command = args.shift().toLowerCase().trim();
        //console.log(command);
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
        if (command == 'f'){
            msg.delete();
            msg.reply('🇫');
        }
        if (command == 'advice'){
            msg.delete();
            msg.channel.send("don't be a bitch");
        }
        if (command == 'pack'){
            msg.delete();
            msg.channel.send("we pack our bags and leave");
        }
        if (command == 'p'){
            msg.delete();
            msg.channel.send("sup fuckers, whachu gon do, ban me?");
        }
    }
})

/*bot.on('nitroBoost' , (booster)=>{
    bot.channels.get('785042648511021057').send(`${booster} boosted the server`)
    if(booster.roles.has('784976884353728512')){
        bot.channels.get('785042648511021057').send('tag found');
    }else{
        bot.channels.get('785042648511021057').send('tag not found');
    }
})*/



bot.login(tk);