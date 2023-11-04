var http = require('http');

const PORT = 8081;

const server = http.createServer((request, response) => {

    if (request.url === '/api') {
        response.writeHead(200, {'Content-Type': 'application/json'});

        response.end(JSON.stringify({ response: 'OK'}));
    } else {
        response.writeHead(500, {'Content-Type': 'application/json'});

        response.end(JSON.stringify({ response: 'not found'}));
    }    
});

server.listen(PORT, () => {
    console.info(`Listening on port: ${PORT}`)
});
