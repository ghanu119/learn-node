const express = require('express');
const server = express();

/**
 * Application Level Middleware
 */
server.use( ( req, res, next) => {
    console.log( 'From Middleware',req.method, req.url);
    if( ['/home', '/about'].includes(req.url)){

        next();
    }else{
        res.send('Invalid request');
    }
});

server.listen( 5000, () => {
    console.log( 'Server is listenig on http://localhost:5000 port...');
});

const cutomMiddleware = ( arg ) => {
    return ( req, res, next) => {
        console.log('custom Midleware', arg)
        if( arg == 'home'){
            
            console.log('Handled Home page');
            next();

        }else{
            res.send('Not matching');
        }

    }
}

server.get('/home', cutomMiddleware('home'), ( req, res ) => {
    res.send( 'Home');
})

server.get('/about',cutomMiddleware('about'), ( req, res ) => {
    res.send( 'about');
})

