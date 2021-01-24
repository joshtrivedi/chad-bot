const channels = ['792527126511353866']
module.exports = (client) => {
    client.on('message',msg=>{
        const {
            channel,content,author
        } = msg;
        if(!channels.includes(channel.id)){
            return;
        }
        if(msg.member.roles.cache.find(r => r.name === "Sugar Daddy")) {
            msg.channel.send('hi sugar daddy');
        }else{
            msg.channel.send('you dont have the role required');
            return;
        }
    })
}