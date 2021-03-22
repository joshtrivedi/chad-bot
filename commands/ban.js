const {
    moderator_role
} = require('../config.json')

const Discord = require('discord.js')

const reg = /(<@!)\d{18}(>)/

module.exports = {
    name: "ban",
    description: "ban a user with a reason specified",
    access: "moderators",
    async execute(client, message, args) {
        //TODO Add dm message for ban
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first();
        const duration = args[1]
        let reg = /d+/
        if (!reg.test(duration)) duration = 0
        if (!args[0]) return message.channel.send('Please specify a user');

        if (!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if (!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

        if (member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');


        let reason = args.slice(2).join(" ");

        if (!reason) reason = 'Unspecified';

        member.ban({
            days: `${duration}`,
            reason: `${reason}`
        }).catch(err => {
            message.channel.send('Something went wrong')
            console.log(err)
        })

        const banembed = new Discord.MessageEmbed()
            .setTitle('Member Banned')
            .setThumbnail(member.user.displayAvatarURL())
            .addField('User Banned', member)
            .addField('Kicked by', message.author)
            .addField('Reason', reason)
            .setFooter('Time kicked', client.user.displayAvatarURL())
            .setTimestamp()

        message.channel.send(banembed);



    }
}