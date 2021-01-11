const channels = ['776161181681451028']
module.exports = (client) => {
    client.on('message',msg=>{
        const {
            channel,content,author
        } = msg;
        if(!channels.includes(channel.id)){
            return;
        }
        if(msg.member.roles.cache.find(r => r.name === "MegaSimp")) {
            msg.channel.send('hi sugar daddy');
        }else{
            return;
        }
    })
}