const groupRouteMiddleware = ( req, res, next ) => {
    console.log('groupRouteMiddleware');
    next();
}

module.exports = groupRouteMiddleware;