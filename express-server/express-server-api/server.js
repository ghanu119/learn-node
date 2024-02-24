const express = require('express');
const server = express();

const jsonData = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'Joe Doe'
    }
]
server.use( '/assets',express.static( __dirname + '/assets'));

server.listen( 5000, () => {
    console.log( 'Server is listenig on http://localhost:5000 port...');
});

server.use('/', express.static(__dirname + '/') );

server.get('/api/data', (req,res) => {
    const queryParam = req.query;
    let data = jsonData;
    if( queryParam.search ){
        const searchParam = queryParam.search;
        data = jsonData.filter( d => d.name.includes( searchParam ) ); 
    }
    res.json( data );
});

server.get('/api/data/:id', ( req, res ) => {
    const id = req.params.id;
    if( id ){
        const record = jsonData.find( ( d ) => d.id == id );
        if( record ){
            res.json( record );

        }else{
            res.status( 404 ).json('invalid request.');

        }
    }else{
        res.status( 404 ).json([]);
    }

})
// server.all('/api/*', (req,res) => {
//     const data = {
//         message: 'No Data found.'
//     }
//     res.status(404).json( data );
// });

