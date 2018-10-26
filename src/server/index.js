require('dotenv').config();
const http = require('http');
const debug = require('debug')('ssr:http');

const expressApp =
    process.env.NODE_ENV === 'development'
        ? require('./server.dev')
        : require('./server.prod');

const server = http.createServer(expressApp);
const port = parseInt(process.env.PORT || '8080', 10);

// Start the server
server.listen(port);

server.on('listening', function() {
    debug('Server is listening on port: ' + port);
});

server.on('error', function(err) {
    console.error(err);
    process.exit(1);
});

module.exports = server;
