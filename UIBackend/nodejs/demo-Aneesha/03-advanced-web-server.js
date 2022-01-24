// http module - in-built in Node
const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer(( req, res ) => {
    // req.url has the "request path" (for "http://localhost:3000/hello?format=upper&showDate=true", it is "/hello")

    // { pathname: '/hello', query: { format: 'upper', showDate: true } }
    const urlParts = url.parse( req.url, true ); // url.parse( "/hello?format=upper" )
    console.log( urlParts );

    const word = urlParts.pathname.substring( 1 );
    
    let formattedWord;

    if( urlParts.query.format === 'upper' ) {
        formattedWord = word.toUpperCase();
    } else if( urlParts.query.format === 'lower' ) {
        formattedWord = word.toLowerCase();
    } else {
        formattedWord = word;
    }

    res.write( formattedWord + ' Chrome' );

    if( urlParts.query.showDate === 'true' ) {
        const date = (new Date()).toDateString();
        res.write( date );
    }

    res.end();
});

server.on( "listening", () => {
    console.log( 'Server is running on http://localhost:3000/' );
});

server.on( "error", ( err ) => {
    console.log( err.message );
});

// port number >= 1024
server.listen( 3000 );