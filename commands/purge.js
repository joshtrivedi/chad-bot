const {
    MessageAttachment
} = require('discord.js');
const {
    moderator_role
} = require('../config.json')

module.exports = {
    name: "purge",
    description: "Delete certain number of messages",
    access: "moderators",
    async execute(msg, args) {
        if(!args.length === 1){
            msg.channel.send('Please enter only one argument!')
            return
        }
        if(msg.member.roles.cache.find(((m) => moderator_role.find(f=>f.includes(m.name.toLowerCase()))))) {
            var num = args[0]
            if (isNaN(num)) msg.reply("the argument that you entered after the command isn't a number");
            else {
                msg.channel.bulkDelete(num, true).catch(err => {
                    console.error(err);
                    msg.channel.send('there was a problem pruning messages from this channel')
                })
            }
        }else{
            msg.channel.send('You need to have administrator privileges for that!')
        }
    }
}   