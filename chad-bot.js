const Discord = require('discord.js');

const dotenv = require('dotenv')
dotenv.config()
const bot = new Discord.Client();
const tk = process.env.NOTHING_SPECIAL;
const {
    prefix
} = require('./config.json')
const polls = require('./polls');
var F = '785180507846869032';

const fs = require('fs')
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

bot.on('ready', () => {
    console.log('This bot is working');
    polls(bot)
})

bot.on('message', msg => {

    if (msg.content.toLowerCase() === 'f') return msg.reply('🇫')
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
    if (command === 'ping') {
        bot.commands.get('ping').execute(msg)
    } else if (command === 'help' || command === 'commands') {
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
        if (args[0] === 'filter') {
            switch (args[1]) {
                case 'name':
                    msg.channel.send('Do !commands and you will find the name of all commands')
                    break;
                case 'access':
                    let filtered_everyone = '**Commands accessible to everyone:** \n'
                    let filtered_mods = '**Commands accessible to mods:** \n'
                    for (const file of commandFiles) {
                        const command = require(`./commands/${file}`)
                        if (command.access === 'everyone') {
                            filtered_everyone += ("`" + command.name + " `: " + command.description + "\n")
                        } else if (command.access === 'moderators') {
                            filtered_mods += ("`" + command.name + " `: " + command.description + "\n")
                        }
                    }
                    msg.channel.send(filtered_everyone)
                    msg.channel.send(filtered_mods)
                    break;
                default:
                    msg.channel.send('wrong arguments, please enter either `!commands filter name` or `!commands filter access`')
                    break;
            }
            return
        }
        let noOfCommands = "Available commands: \n"
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`)
            noOfCommands += (command.name + " : " + command.description + " : ` access : " + command.access + "`\n")
        }
        msg.channel.send(noOfCommands)
    } else if (command === 'purge') {
        bot.commands.get('purge').execute(msg, args)
    } else if (command === 'mute') {
        bot.commands.get('mute').execute(msg, args)
    } else if (command === 'ban') {
        bot.commands.get('ban').execute(bot, msg, args)
    } else if (command === 'compliment') {
        bot.commands.get('compliment').execute(msg, args)
    } else if (command === 'mv' || command === 'motivation') {
        bot.commands.get('motivation').execute(msg, args)
    }
})

bot.login(tk);