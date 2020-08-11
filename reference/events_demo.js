const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event fired'));
myEmitter.on('other_event', () => console.log('Another event'));

// Init event
myEmitter.emit('event');
myEmitter.emit('other_event');
