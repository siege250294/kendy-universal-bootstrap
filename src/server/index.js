let server
if (process.env.NODE_ENV === 'production') {
	server = require('./server').default
} else {
	server = require('./dev-server').default
}

server.listen(process.env.PORT || 8080)