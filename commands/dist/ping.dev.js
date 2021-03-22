"use strict";

module.exports = {
  name: 'ping',
  description: 'returns a pong message',
  access: "everyone",
  execute: function execute(msg) {
    return regeneratorRuntime.async(function execute$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            msg.channel.send('pong!');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};