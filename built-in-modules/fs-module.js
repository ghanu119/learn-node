const fs = require('fs');

console.log('Before');

const intro = fs.readFile( './basics/intro.js', 'utf-8', ( d, intro ) => {
    console.log('File content', intro);
});

console.log('After');

console.log( intro);