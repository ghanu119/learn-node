const fs = require('fs');

console.log('Before');

fs.readFile( './basics/intro.js', 'utf-8', ( err, intro ) => {

    console.log('-----------');
    console.log('Async File content', intro);
});

const fileContent = fs.readFileSync( './basics/intro.js', 'utf-8', );

console.log( fileContent );

console.log('After');
