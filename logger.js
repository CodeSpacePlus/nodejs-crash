const EventEmitter = require('events');
const uuid = require('uuid');
const { Console } = require('console');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

const logger = new Logger();

logger.on('message', (data) => {
  console.log('Called Listener:', data);
});

logger.log('Hellow WOrld');
module.exports = Logger;
