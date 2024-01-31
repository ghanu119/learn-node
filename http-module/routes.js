const http = require('http');

const server = http.createServer( ( req, res ) => {

    if( req.url == '/about'){
        res.write(`<h1>This is about page</h1>`);

    }else if( req.url == '/'){
        res.write(`<h1>Welcome to the NodeJS page</h1>`);
        
    }else{

        res.write(`<h1>Oops! Requested page does not exists.</h1>`);
    }

    res.end();
    
});

console.log('Server is running on the 5000 port...');
server.listen( 5000 );
console.log('http://localhost:5000');