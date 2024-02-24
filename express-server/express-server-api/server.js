const express = require('express');
const server = express();
const { readFileSync } = require('fs');

server.use( '/assets',express.static( __dirname + '/assets'));

server.listen( 5000, () => {
    console.log( 'Server is listenig on http://localhost:5000 port...');
});

server.use('/', express.static(__dirname + '/') );

server.get('/api/data', (req,res) => {
    const data = [
        {
            id: 1,
            name: 'John Doe'
        },
        {
            id: 2,
            name: 'Jane Doe'
        },
        {
            id: 3,
            name: 'Joe Doe'
        }
    ]
    res.json( data );
});
// server.all('/api/*', (req,res) => {
//     const data = {
//         message: 'No Data found.'
//     }
//     res.status(404).json( data );
// });

