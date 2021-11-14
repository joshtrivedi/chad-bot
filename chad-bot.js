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
const cron = require('cron')
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

    let scheduledMessage = new cron.CronJob('00 00 00 * * *', () => {
        const guild = bot.guilds.cache.get('784976368198746175')
        const channel = guild.channels.cache.get('861228741597593640')
        channel.send("Hi <@&861228812694847499>, did you make it today?")
        setTimeout(() => {
            channel.messages.fetch({ limit: 1 }).then(messages => {
            let lastMsg = messages.first()
            if (lastMsg.author.bot) {
                lastMsg.react('👍')
                lastMsg.react('👎')
            }
        })
        }, 500);
        
    })

    scheduledMessage.start();
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
    } else if (command === 'nofap') {
        bot.commands.get('nofap').execute(msg)
    } else if (command === 'time') {
        var currentdate = new Date();
        var datetime = "Date Time: " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        msg.channel.send(datetime)
    }
})

bot.login(tk);