const EventEmitter = require('events');

let eventClass = new EventEmitter();

eventClass.on('test', ( data ) => {
    console.log('Lister on test in event', data);
})

setTimeout( () =>{
    eventClass.emit('test', { id: 1, name: 'John Doe'});
}, 1000);