function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var compliments = Array();
compliments[0] = "Your smile is contagious."
compliments[1] = "I bet you make babies smile."
compliments[2] = "You have the best laugh."
compliments[3] = "You light up the room."
compliments[4] = "You have a great sense of humor."
compliments[5] = "If cartoon bluebirds were real, a couple of 'em would be sitting on your shoulders singing right now."
compliments[6] = "You're like sunshine on a rainy day."
compliments[7] = "You bring out the best in other people."
compliments[8] = "I bet you sweat glitter."
compliments[9] = "Colors seem brighter when you're around."
compliments[10] = "You're more fun than a ball pit filled with candy."
compliments[11] = "Jokes are funnier when you tell them."
compliments[12] = "You always know how to find that silver lining."
compliments[13] = "You're a candle in the darkness."
compliments[14] = "Being around you is like a happy little vacation."
compliments[15] = "You're more fun than bubble wrap."
compliments[16] = "You're like a breath of fresh air."
compliments[17] = "You're someone's reason to smile."
compliments[18] = "How do you keep being so funny and making everyone laugh?"
compliments[19] = "You have impeccable manners."
compliments[20] = "I like your style."
compliments[21] = "You're strong."
compliments[22] = "Is that your picture next to 'charming' in the dictionary?"
compliments[23] = "Your kindness is a balm to all who encounter it."
compliments[24] = "You are brave."
compliments[25] = "Your insides are even more beautiful than your outside."
compliments[26] = "You have the courage of your convictions."
compliments[27] = "You're a great listener."
compliments[28] = "You were cool way before hipsters were cool."
compliments[29] = "That thing you don't like about yourself is what makes you really interesting."
compliments[30] = "You're inspiring."
compliments[31] = "You're so thoughtful."
compliments[32] = "When you make up your mind, nothing stands in your way."
compliments[33] = "You seem to really know who you are."
compliments[34] = "You're a smart cookie."
compliments[35] = "Your perspective is refreshing."
compliments[36] = "Your ability to recall random factoids at just the right times is impressive."
compliments[37] = "When you say, 'I meant to do that,' I totally believe you."
compliments[38] = "You have the best ideas."
compliments[39] = "You're always learning new things and trying to better yourself. That's awesome."
compliments[40] = "If someone based an Internet meme on you, it would have impeccable grammar."
compliments[41] = "You could survive a zombie apocalypse."
compliments[42] = "When you make a mistake, you fix it."
compliments[43] = "You're great at figuring stuff out."
compliments[44] = "Your creative potential seems limitless."
compliments[45] = "I bet you do crossword puzzles in ink."
compliments[46] = "You have a good head on your shoulders."
compliments[47] = "Everyone gets knocked down sometimes; only people like you get back up again and keep going."
compliments[48] = "You should be proud of yourself."
compliments[49] = "You are making a difference."
compliments[50] = "You deserve a hug right now."
compliments[51] = "You're a great example to others."
compliments[52] = "Actions speak louder than words, and yours tell an incredible story."
compliments[53] = "You are what makes me feel thankful for life everyday."
compliments[54] = "Sometimes I wish others could see you like the way I do, but then I just think its fun keeping the people who get Art less"
compliments[55] = "Look into the mirror and say 'Oh My God you are stunning' for me please"
compliments[56] = "You are worth it."

module.exports = {
    name: "compliment",
    description: "compliments for everyone!",
    access: "everyone",
    async execute (msg, args){
        var com = getRandomInt(compliments.length)
        msg.channel.send(compliments[com])
    }
}