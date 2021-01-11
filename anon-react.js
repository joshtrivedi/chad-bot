const channels = ['792527126511353866']
var chad_id = '785032136280768512';
var recieving_channel = '785113963430936586';
module.exports = (client) => {
    client.on('message', msg =>{
        const {
            channel,content,author
        } = msg;
        if(!channels.includes(channel.id)){
            return;
        }
        if(msg.author.id === chad_id){
            msg.react('👍');
            msg.react('👎');
        }
        //console.log(content);
    })
    client.on('messageReactionAdd', (MessageReaction, user) =>{
        if(MessageReaction.emoji.name === '👍' ){
            console.log('thumbs up');
        }else if(MessageReaction.emoji.name === '👎' ){
            console.log('thumbs down');
        }
    });
}