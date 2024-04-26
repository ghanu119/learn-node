const express = require('express');
const server = express();

server.use( '/assets',express.static( __dirname + '/assets'));

server.listen( 5000, () => {
    console.log( 'Server is listenig on http://localhost:5000 port...');
});

server.use('/', express.static(__dirname + '/') );
server.use('/about', express.static(__dirname + '/about.html') );
server.all('*', express.static(__dirname + '/error.html') );

// For HTML form
server.use( express.urlencoded({extended:true}));

// For API
server.use( express.json() );

server.post('/submit', ( req, res ) => {
    console.log(req.body);
    res.redirect('/about');
} );
server.post('/api/post', ( req, res ) => {
    console.log(req.body);
    res.status(201).json({name: 'John Doe', id:1});
} );