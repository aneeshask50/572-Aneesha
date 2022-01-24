// http module - in-built in Node
const http = require( 'http' );

const server = http.createServer(( req, res ) => {
    res.write( 'hello, Node\n' );
    res.write( 'how are you Node?!\n' );
    res.write( 'bye' );
    res.end();
});

// server is an "event emitter"
// all event emitters will have a method called "on"
// some events of the HTTP server are - "listening", "request", "error"
server.on( "request", ( req, res ) => {
    console.log( "received a request" );
});

server.on( "listening", () => {
    console.log( 'Server is running on http://localhost:3000/' );
});

server.on( "error", ( err ) => {
    console.log( err.message );
});

// port number >= 1024
server.listen( 3000 );