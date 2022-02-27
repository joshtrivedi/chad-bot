const Discord = require('discord.js');
const emojis = require('./emojis.json')
const regionals = require('./reg-indicator.json')
const {
    polls_channel
} = require('./config.json'); 
const something = require('./something');

function checkEmoji(args) {
    reg = /<.*>$/
    return reg.test(args)
}

function isEmojiAlphabet(args) {
    const matched = 
    regionals.find(e=>e.char === args)
    if(matched) return args
    else return false
}

function isEmojiUnicode(args) {
    const matched =
    emojis.find(element => element.char === args)
    if(matched) return args
    else return false
}

module.exports = (bot) => {
    bot.on('message', async msg => {
        const {
            channel, author, content
        } = msg
        
        if(!polls_channel.includes(msg.channel.id)) {
            return
        }
        if(msg.author.bot) return
        const eachLine = content.split('\n');
        console.log(eachLine)
        for (const line of eachLine) {
            const split = line.split(' ')
            var emoji = split[0].trim()
            //if(!isEmojiUnicode(emoji) && !isEmojiAlphabet(emoji)) break
            if(isEmojiUnicode(emoji)){
                msg.react(emoji ?? "")
            }
            if(isEmojiAlphabet(emoji)){
                msg.react(emoji ?? "")
            }
        }
    })
}
