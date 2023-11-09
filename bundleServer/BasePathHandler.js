const { BaseHandler } = require("./BaseHandler");

class BasePathHandler extends BaseHandler {
    handle(request, response) {
        if (request.url === '/') {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(JSON.stringify({ response: 'OK'}));
            return;
        }
        return super.handle(request, response);
    }
}

module.exports = { BasePathHandler }