require('dotenv').config();
const http = require('http');

let serverListener;
if (process.env.NODE_ENV === 'development') {
    serverListener = require('./dev-server');
} else {
    serverListener = require('./server');
}

const server = http.createServer(serverListener);
const port = parseInt(process.env.PORT || '8080');

// Start the server
server.listen(port);

server.on('listening', function() {
    console.log('Server is listening on port: ' + port);
});

server.on('error', function(err) {
    console.error(err);
    process.exit(1);
});
