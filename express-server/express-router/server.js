const express = require('express');
const server = express();

const apiRoutes = require('./routes/api');

server.use( '/api',apiRoutes);

server.listen( 5000, () => {
    console.log( 'Server is listenig on http://localhost:5000 port...');
});

