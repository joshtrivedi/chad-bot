const {
    member_role,
    timeout_role
} = require('../config.json')
const timeout = require('./timeout')
const ms = require('ms')
const regname = /(<@!)\d{18}(>)/

module.exports = {
    name: "mute",
    description: "mute a user for a given amout of time",
    access: "moderators",
    async execute(msg, args) {
        const {
            content,
            channel,
            author
        } = msg
        var mainRole = msg.guild.roles.cache.find((daddy) => member_role.includes(daddy.name.toLowerCase()))
        var muteRole = msg.guild.roles.cache.find((bruh) => timeout_role.includes(bruh.name.toLowerCase()))
        if (args.length == 1) {
            timeout.execute(msg, args)
            return
        }
        if (args.length == 2) {
            var newArgs = args[0] + " " + args[1]
            if (regname.test(newArgs)) {
                var taggedUser = msg.mentions.members.first()
                taggedUser.roles.add(muteRole)
                .then(msg.channel.send(`<@!${taggedUser.user.id}> has been muted for ${args[1]}`))
                .catch(e=>console.log(e))
                setTimeout(function() {
                    taggedUser.roles.remove(muteRole.id)
                }, ms(args[1]))
            }else{
                msg.channel.send('Please check if you followed the right format, `!mute @user time` \nThank you!')
            }
        }
    }
}