const sayHi = ( name ) => {
    console.log('Hello, ' + name );
}

const multiply = ( firstVal, secVal ) => {
    console.log( `Multiplication of the ${firstVal} x ${secVal}: ${firstVal * secVal }` );
}

module.exports = {sayHi, multiply};