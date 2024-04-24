const globalMiddleware = ( req, res, next ) => {
    console.log('Global Middleware');
    next();
}

module.exports = globalMiddleware;