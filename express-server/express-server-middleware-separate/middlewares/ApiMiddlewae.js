const apiMiddleware = ( req, res, next ) => {
    console.log('Only for API Middleware');
    next();
}

module.exports = apiMiddleware;