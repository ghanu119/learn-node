
const mime =  require('mime');
const http = require('http');
const { readFileSync, existsSync } = require('fs');

const server = http.createServer( (req, res) => {

    const url = req.url;
    if( url === '/'){
        const home = readFileSync(__dirname + '/index.html');
        res.end( home );
    }else if( url === '/about'){

        const about = readFileSync(__dirname + '/about.html');
        res.end( about );
    }else if( existsSync( __dirname + url ) ){
        res.writeHead( 200, { 'Content-Type': mime.getType(  __dirname + url )});
        console.log(mime.getType(  __dirname + url ), url);
        const sourceFile = readFileSync(__dirname + url);
        res.end( sourceFile );
    }else{
        res.writeHead( 404 );
        res.end( 'Not Found' );
        
    }
    return;
})

server.listen( 5000, () => {
    console.log("server has been started on 5000 port.");
} );
