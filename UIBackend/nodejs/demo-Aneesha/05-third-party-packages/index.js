// CommonJS import syntax
const lodash = require( 'lodash' );
const { divide } = require( 'lodash' );

// throws an error
// const chalk = require( 'chalk' );

console.log( lodash.divide( 20, 3 ) );
console.log( divide( 20, 3 ) );

// console.log( chalk.red( 'File does not exist' ) );