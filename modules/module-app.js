const names = require('./common-variables');

const commonfn = require('./common-functions');

const sayHi = commonfn.sayHi;

const multiply = commonfn.multiply;


names.map( ( name ) => {
    sayHi(name);
});

multiply( 10, 20 );