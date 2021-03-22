const reg = /([a-zA-Z]) (\d+)/
const regname = /(<@!)\d{18}(>)/
const {
    moderator_role,
    timeout_role
} = require('../config.json')
const mute = require('./mute')

module.exports = {
    name : 'timeout',
    description : 'gives the user mentioned a timeout role',
    async execute (msg, args) {
        const {
            content, author, channel
        } = msg

        if(args.length == 2){
            mute.execute(msg, args)
            return
        }
        var newargs = ""
        newargs+=(args[0])
        if(!msg.member.roles.cache.find(((m) => moderator_role.find(f=>f.includes(m.name.toLowerCase()))))) return

        if(regname.test(newargs))
        {
            var user = msg.mentions.members.first()
            var timeoutrole = msg.guild.roles.cache.find((r) => timeout_role.includes(r.name.toLowerCase()))
            try{
                user.roles.add(timeoutrole).then(msg.channel.send(`<@!${user.id}> has been muted`))
            }catch(e){
                console.log(e)
            }
        }else{
            msg.channel.send('Wrong format, please use format `!timeout user time`')
        }
    }
}