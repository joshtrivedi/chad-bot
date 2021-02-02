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
        if((msg.author.id === sneha_id) && (msg.content.toLowerCase()) === "hi josh"){
            msg.reply("I'm sure he's supposed to say Hi Sneha");
        }
        if((msg.author.id === josh_id) && (msg.content) === "hi sneha"){
            msg.reply("capital S josh...");
        }
        if((msg.author.id === josh_id) && (msg.content === "hi Sneha")){
            msg.reply("that's much better, hi Jo-, wait I'm not Sneha");
        }
    })
}