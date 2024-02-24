const express = require('express');
const server = express();
const { readFileSync } = require('fs');

server.use( '/assets',express.static( __dirname + '/assets'));

server.listen( 5000, () => {
    console.log( 'Server is listenig on http://localhost:5000 port...');
});

server.use('/', express.static(__dirname + '/') );
server.use('/about', express.static(__dirname + '/about.html') );
server.all('*', express.static(__dirname + '/error.html') );
// server.get('/', ( req, res ) => {
//     res.status( 200 )
//         .header({ 'Content-Type': 'text/html'})
//         .send( readFileSync( __dirname + '/index.html') );
// })
// server.get('/about', ( req, res ) => {
//     res.status( 200 )
//         .sendFile( __dirname + '/about.html' );
// })

// server.all('*', ( req, res ) => {
//     res.status( 404 )
//         .send( readFileSync( __dirname + '/error.html'));
// })
