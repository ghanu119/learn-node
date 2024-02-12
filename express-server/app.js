const express = require('express');

const server = express();
const { readFileSync } = require('fs');

server.listen( 5000, () => {
    console.log( 'Server is listenig on 5000 port...');
});


server.get('/', ( req, res ) => {
    res.status( 200 )
})
