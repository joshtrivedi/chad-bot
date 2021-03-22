module.exports = {
    name: 'ping',
    description: 'returns a pong message',
    access: "everyone",
    async execute(msg) {
        msg.channel.send('pong!')
    }
}