const http = require('http');

const hostname = '192.168.1.147';
const port = 1964;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Max App is Up and Running!\n');
});

server.listen(port, hostname, () => {
  	console.log(`Max Server running at http://${hostname}:${port}/`);
});

