const channels = ['785057197960593408']
module.exports = (client) => {
    client.on('message', msg => {
        const {
            channel,content
        } = msg;
        if (!channels.includes(channel.id)) {
            return
        }
        const eachLine = content.split('\n');
        for (const line of eachLine) {
            const split = line.split(' ');
            const emoji = split[0].trim();
            try{
                msg.react(emoji);
            }catch(e){
                console.log('Opps');
            }
            
        }
    })
}