console.log( 'started executing a' );

// If the same module is required again during one execution, that module WILL NOT RUN AGAIN
const B1 = require( './05-b' );
const B2 = require( './05-b' );

console.log( B1.greet( 'Hello', 'world' ) );
console.log( B2.greet( 'Hello', 'John' ) );

console.log( 'finished executing a' );
