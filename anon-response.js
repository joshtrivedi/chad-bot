const channels = ['']
const channel_id = '792527126511353866';
module.exports = (client) => {
    client.on('message' , msg =>{
        const {
            author,content
        } = msg;
        if (msg.channel.type === "dm"){
            if(client.channels.cache.find(c => c.id === channel_id)){
                client.channels.cache.find(c => c.id === channel_id).send(msg.content);
            }else{
                console.log('no');
            }
        }
    })
}