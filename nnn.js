const cron = require('cron');

module.exports = {
    name: 'nnn',
    description: 'tags everyone in 24h intervals to ask if they made it',
    access: "everyone",
    async execute(bot) {
        let Reminder = new cron.CronJob('00 00 00 * * *', ()=>{
            let channel = bot.channels.get('861228741597593640')
            channel.send('Hi Kings, did you make it past today?')
        })
    }
}