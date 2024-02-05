const EventEmitter = require('events');

let eventClass = new EventEmitter();

eventClass.on('test', () => {
    console.log('Lister on test in event');
})

setTimeout( () =>{
    eventClass.emit('test');
}, 1000);