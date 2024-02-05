const { readFile } = require('fs');

const util = require('util');

const getText = util.promisify( readFile );


const readFiles = async () => {
    const intro = await getText( './basics/intro.js', 'utf-8');
    const simpleJs = await getText( './http-module/simple.js', 'utf-8');

    console.log( intro, simpleJs );
}

readFiles();