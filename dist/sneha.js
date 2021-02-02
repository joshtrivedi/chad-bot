const channels = ['806232333342081134']
var josh_id = '675120965314805760'
var sneha_id = '728195817558638692'
module.exports = (client) => {
    client.on('message', (msg) =>{
        const {
            channel,author,content
        } = msg;
        if(!channels.includes(channel.id)){
            return;
        }
        if(msg.content === "hi josh"){
            console.log(msg.author.id);
        }
    })
}