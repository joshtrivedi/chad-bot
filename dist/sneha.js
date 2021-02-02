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
        if(msg.content.toLowerCase() === "hi josh"){
            if(msg.author.id === sneha_id){
                msg.reply("I think he is supposed to say Hi Sneha rn, cmon <@`{675120965314805760}`> do it");
            }else{
                msg.reply("i think that is reserved just for Sneha to say");
            }
        }
        if(msg.content === "hi sneha"){
            if(msg.author.id === josh_id){
                msg.reply("ok how many times do I have to tell you this Josh, S capital...");
            }
        }
        if(msg.content === "hi Sneha" || msg.content === "Hi Sneha"){
            if(msg.author.id === josh_id){
            msg.reply("That's better now Hi J-, wait I am not Sneha tf <@728195817558638692> come here please");
            }else{
                msg.reply("can't say that to yourself wyd");
            }
        }
    })
}