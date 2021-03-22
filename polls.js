const emojis = require('./emojis.json')

const {
    polls_channel
} = require('./config.json')


function isEmojifromJSON(args) {
    const matched = 
    emojis.find(element => element.char === args)
    if(matched) return true
    else return false
}

module.exports = (bot) => {
    bot.on('message',msg => {
        const {
            channel, author, content
        } = msg
        
        if(!polls_channel.find(f=>f.includes(channel.id))) return
        const backSlash = '\ '.trim()
        const eachLine = content.split('\n');
        for (const line of eachLine) {
            const split = line.split(' ')
            var emoji = split[0].trim()

            if(emoji.startsWith(backSlash)) emoji=(emoji.substring(1,emoji.length))

            if(!isEmojifromJSON(emoji)) continue
            
            msg.react(emoji)

        }
    })
}