const singleMiddleware = ( req, res, next ) => {
    console.log('Single Middleware');
    next();
}

module.exports = singleMiddleware;