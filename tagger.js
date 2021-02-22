const { Message } = require("discord.js");

const channels = ['785038193958453291','776169814980821052']
const pooprole = '813459718277169242'
module.exports = (client) => {
    client.on('message',msg=>{
        const{
            channel, author, content
        } = msg;
        if(!channels.includes(channel.id)){
            return;
        }
        if(msg.member.roles.cache.find(r => r.name === "Boys")){
            if(msg.content.toLowerCase().includes("!poop add")){
                console.log("hello")
                var txt = msg.content.toLowerCase();
                user_id = "<@!"+msg.content.substring(txt.indexOf("<@!")+3,txt.indexOf(">"))+">"
                
                try{
                    let role = msg.member.guild.roles.cache.find(r => r.name === "Poop Squad")
                    if (!msg.member.roles.cache.find((r => r.name === "Poop Squad"))){
                        if (role){
                            msg.guild.members.cache.get(msg.author.id).roles.add(role)
                            msg.react('👍')
                        }
                        else msg.channel.send('well something is wrong <@!675120965314805760> what did you do')
                    }
                    else msg.channel.send('you already an honorary poop squad member sire!')
                }catch(e){
                    console.log(e)
                }
            }
        }else{
            console.log('nope')
        }
    })
}