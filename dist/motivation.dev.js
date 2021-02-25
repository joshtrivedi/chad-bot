"use strict";

var channels = ['792527126511353866', '776169814980821052'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var mot = ["Try not to become a man of success, but rather try to become a man of value. – Albert Einstein", "A creative man is motivated by the desire to achieve, not by the desire to beat others. – Ayn Rand", "Nearly all men can stand adversity, but if you want to test a man’s character, give him power. – President Abraham Lincoln", "The real man smiles in trouble, gathers strength from distress, and grows brave by reflection. – Thomas Paine", "No man will make a great leader who wants to do it all himself or get all the credit for doing it. – Andrew Carnegie", "A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them. – John C. Maxwell", "It takes a great man to be a good listener. – President Calvin Coolidge", "Part of being a man is learning to take responsibility for your successes and for your failures. You can’t go blaming others or being jealous. Seeing somebody else’s success as your failure is a cancerous way to live. – Kevin Bacon", "A man does what he must–in spite of personal consequences, in spite of obstacles and dangers and pressures–and that is the basis of all human morality. – President John F. Kennedy", "Being male is a matter of birth. Being a man is a matter of age. But being a gentleman is a matter of choice. ― Vin Diesel", "A gentleman is someone who does not what he wants to do but what he should do. ― Haruki Murakami", "A gentleman is one who puts more into the world than he takes out – George Bernard Shaw", "Courtesy is as much a mark of a gentleman as courage. – President Theodore Roosevelt", "A gentleman would be ashamed should his deeds not match his words. – Confucius", "People talk about random acts of kindness, and that goes back to the measure of being gentlemanly again. It’s about having consideration for others, and not expecting anything back. That’s the difference. – Simon Baker", "A gentleman is one who never hurts anyone’s feelings unintentionally. ― Oscar Wilde", "If you live long enough, you’ll make mistakes. But if you learn from them, you’ll be a better person. It’s how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit. – President William Jefferson Clinton", "This is the test of your manhood: How much is there left in you after you have lost everything outside of yourself? – Orison Swett Marden", "A man is one whose body has been trained to be the ready servant of his mind; whose passions are trained to be the servants of his will; who enjoys the beautiful, loves truth, hates wrong, loves to do good, and respects others as himself. – John Ruskin", "It is not the situation which makes the man, but the man who makes the situation. – Frederick William Robertson", "The man who is deserving the name is the one whose thoughts and exertions are for others rather than for himself. – Walter Scott", "To be a man is, precisely, to be responsible. – Antoine de Saint-Exupery", "The strength of a man’s virtue should not be measured by his special exertions but by his habitual acts. – Blaise Pascal", "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny. – Unknown", "You can easily judge the character of a man by how he treats those who can do nothing for him.  – James D. Miles"];

module.exports = function (client) {
  client.on('message', function (msg) {
    var author = msg.author,
        content = msg.content,
        channel = msg.channel;
    if (!channels.includes(channel.id)) return;

    if (msg.content.toLowerCase() === 'chad quote') {
      var x = getRandomInt(mot.length);
      msg.channel.send(mot[x]); //console.log(mot[x])
    }
  });
};