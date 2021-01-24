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
const tk = process.env.NOTHING_SPECIAL;
const polls_id = '785057197960593408';
const a = '785061567434981407';
const b = '785061577803169814';
const polls = require('./polls');
var F = '785180507846869032';
var testmessage_id = '785113963430936586';
var chadchannel = '792527126511353866';
var anon = require('./anon-response');
var booster = require('./booster');
var anon_react = require('./anon-react');
var random_responses = Array();
random_responses[0] = "don't @ me rn I'm sliding in some dms" 
random_responses[1] = "I have no idea what you're talking about"
random_responses[2] = "disturb me another time, I'm trying to shave my balls" 
random_responses[3] = "yo wuz good dawg"
random_responses[4] = "idk ask pras, he likes being a `know it all`"
random_responses[5] = "and you expect me to answer that?"

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

bot.on('ready', () => {
    console.log('This bot is working');
    polls(bot);
})

bot.on('message', msg => {

    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    if (msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length + 1).split(/ +/);
        const command = args.shift().toLowerCase().trim();
        if (command == 'ping') {
            msg.channel.send('yes');
        }
        if (command == 'commands') {
            msg.channel.send('find out yourself im busy');
        }
        if (command == 'simp') {
            msg.channel.send('<:nou:776223420975284274>');
        }
        if (command == 'advice'){
            msg.channel.send("don   't be a bitch");
        }
        if (command == '' || command == 'hi'){
            var x = getRandomInt(random_responses.length)
            msg.channel.send(random_responses[x])
        }
    }
})



bot.login(tk);