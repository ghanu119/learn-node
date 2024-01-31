const http = require('http');

const server = http.createServer( ( req, res ) => {

    res.write(`<h1>Hello, Welcome to the Node server</h1>`);
    res.write(`<br><pre>${JSON.stringify(req.toArray())}</pre>`);
    res.write(`<br><pre>${req.path}</pre>`);

    res.end();
    
});

console.log('Server is running on the 5000 port...');
server.listen( 5000 );
console.log('http://localhost:5000');