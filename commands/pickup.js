const api = "https://getpickuplines.herokuapp.com/lines/random"
const fetch = require('node-fetch')

module.exports = {
    name: "pickup",
    description: "pickup lines",
    access: "everyone",
    async execute(msg) {

        const response = await fetch(api)
        if (response.status === 200) { 
            const pickupLine = await response.json().then((j) => j.line).catch((error) => {msg.reply('Sorry, I think my AI Pickup Line brain had a hiccup, please try again in a while')})
            //interaction.followUp(pickupLine + interaction.options)))
            //const person = interaction.options.getMentionable('user') ?? ""
            msg.reply(`${pickupLine}`)
        }
    }
}