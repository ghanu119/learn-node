
const http = require('http');

const server = http.createServer( ( req, res  ) => {
    const url = req.url;
    if( url == '/' ){
        console.log('Home page route called');
        res.end('Home Page');
    }else if( url == '/about' ){
        console.log('About page route called');
        for( let i = 1; i < 300; i++){

            for( let j = 1; j < 1000; j++){
                console.log(`${i} - ${j}`);
            }
        }
        res.end('About Page');
    }else {
        console.log('Invalid route called');
        res.end('Error Page');
    }
})

server.listen( 5000, () => {
    console.log('server is listening on port 5000');
})