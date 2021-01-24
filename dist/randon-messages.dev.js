"use strict";

var channels = [];
var random_responses = Array();
random_responses[0] = "don't @ me rn I'm sliding in some dms";
random_responses[1] = "I have no idea what you're talking about";
random_responses[2] = "disturb me another time, I'm trying to shave my balls";
random_responses[3] = "yo wuz good dawg";
random_responses[4] = "idk ask pras, he likes being a `know it all`";
random_responses[5] = "and you expect me to answer that?";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = function (client) {
  client.on('message', function (msg) {
    var content = msg.content;
    {
      var x = getRandomInt(random_responses.length);
      console.log(random_responses[x]);
    }
  });
};