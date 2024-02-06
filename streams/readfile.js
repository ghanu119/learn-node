const { createReadStream } = require('fs');

const stream = createReadStream('./async/readfile.js', {encoding: 'utf-8', highWaterMark: 500});

let fullData = '';

stream.on('data', ( res ) => {
    fullData += res;
    console.log('Reading Data');
})

stream.on('close', () => {
    console.log('On complete');
    console.log( fullData );
})