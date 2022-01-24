// console.log( process );

// an object with the environment variables
console.log( process.env );
console.log( process.env.PORT );
console.log( process.env.NODE_ENV );

console.clear();

console.log( process.argv );

const num1 = parseInt( process.argv[2] );
const num2 = parseInt( process.argv[3] );

if( isNaN( num1 ) || isNaN( num2 ) ) {
    console.log( 'Please provide numbers to add' );
    process.exit( 1 );
}

console.log( num1 + num2 );

console.log( 'end of script' );
