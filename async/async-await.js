const { readFile } = require('fs');

const getFileText = ( path ) => {
    return new Promise( ( res, rej ) => {readFile( path, 'utf-8', ( err, data ) => {
            if( err ){
                rej( err );
            }else{
                res( data );
            }
        })    
    });
}

const readingFiles = async () => {
    const first = await getFileText('./basics/intro.js');
    const second = await getFileText('./basics/global-require.js');

    console.log('frst and second file');
    console.log( first + second);
};

readingFiles()