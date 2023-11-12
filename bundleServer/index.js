var http = require('http');
const { BasePathHandler } = require('./BasePathHandler');
const { BundlerHandler } = require('./BundlerHandler');

const PORT = 9000;

const server = http.createServer((request, response) => {

    const basePathHandler = new BasePathHandler();
    const bundlerHandler = new BundlerHandler();

    basePathHandler.setNext(bundlerHandler);

    basePathHandler.handle(request, response);  
});

server.listen(PORT, () => {
    console.info(`Listening on port: ${PORT}`);
});
