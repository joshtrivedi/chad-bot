module.exports = {
    name : 'gulugulu',
    description : 'Adds the gulu tag to users',
    access : "everyone",
    async execute(msg) {
        const { 
            content, 
            channel, 
            author,member
        } = msg
        let role = msg.member.guild.roles.cache.find(r => r.name == "Hydration Nation")
        if(!msg.member.roles.cache.some(r=>r.name=="Hydration Nation")) {
            msg.guild.members.cache.get(msg.author.id).roles.add(role)
                        .then(msg.react('👍'))
                        .catch(err=>console.log(err))
        }
        else msg.reply('Bruh you already have the role specified')

    }
}