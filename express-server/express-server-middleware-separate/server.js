const express = require('express');
const server = express();


const globalMiddleware = require('./middlewares/GlobalMiddleware');
const apiMiddleware = require('./middlewares/ApiMiddlewae');
const singleMiddleware = require('./middlewares/SingleMiddleware');
const groupRouteMiddleware = require('./middlewares/GroupRouteMiddleware');

/**
 * Global Middleware
 */
server.use(  globalMiddleware );

/**
 * Only for API Middleware
 */
server.use(  '/api',apiMiddleware );

server.listen( 5000, () => {
    console.log( 'Server is listenig on http://localhost:5000 port...');
});

server.get('/home', ( req, res ) => {
    res.send( 'Home');
})

server.get('/about', ( req, res ) => {
    res.send( 'about');
})

server.get('/api/products', ( req, res ) => {
    res.send( 'Products from the API');
})

server.get('/api/items', ( req, res ) => {
    res.send( 'ITEMS from the API');
})

server.get('/custom/route', singleMiddleware, ( req, res ) => {
    res.send( 'Products from the API');
})

server.get('/custom', singleMiddleware, ( req, res ) => {
    res.send( 'ITEMS from the API');
})


// All the below route will be used the this middlware
server.use( groupRouteMiddleware );

server.get('/group/users', ( req, res ) => {
    res.send( 'Users List');
})

server.get('/group/employees', ( req, res ) => {
    res.send( 'Employees List');
})