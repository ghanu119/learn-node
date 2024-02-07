const http = require('http');
const { readFileSync } = require('fs');

const server = http.createServer( (req, res) => {

    const url = req.url;

    if( url === '/'){
        console.log(__dirname);
        const home = readFileSync(__dirname + '/index.html');
        res.end( home );
    }else if( url === '/about'){
        const about = readFileSync(__dirname + '/about.html');
        res.end( about );
    }else{
        const err = readFileSync(__dirname + '/error.html');
        res.end( err );
        
    }
    return;
})

server.listen( 5000, () => {
    console.log("server has been started on 5000 port.");
} );
