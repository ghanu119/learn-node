const path = require('path');

const filePath = path.join('basics', 'intro.js');

const folderSeparator = path.sep;

console.log( filePath, folderSeparator, path.basename( filePath ), path.resolve( filePath ) );