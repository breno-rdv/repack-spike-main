var http = require('http');
const { BundlerHandler } = require('./BundlerHandler');

const PORT = 8081;

const bundlerHandler = new BundlerHandler();

const server = http.createServer((request, response) => {

    bundlerHandler.handle(request, response);  
});

server.listen(PORT, () => {
    console.info(`Listening on port: ${PORT}`)
});
