const { readFile } = require('fs');

const getText = ( path ) => {
    return new Promise( ( res, rej) => {
        readFile( path, 'utf-8', ( err, data ) => {
            if( err ){
                rej( err );
            }else{
                res( data )
            }
        });
    })
}


getText('./basics/intro.js').then(
    ( res ) => {
        console.log('Data of intro.js file');
        console.log( res );
        
        getText('./http-module/routes.js').then(
            ( res ) => {
                console.log('Data of routes.js file');
                console.log( res );

            },
            ( rej ) => {
                console.log('error on the routes.js file', rej);
            }
        )
    },
    ( rej ) => {
        console.log('error on the routes.js file', rej);
    }
)