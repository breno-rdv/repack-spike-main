const fs = require('fs');
const path = require('path')
const { BaseHandler } = require('./BaseHandler');

class BundlerHandler extends BaseHandler {
    handle(request, response) {
        if (request.url.match(/^repackminiapp|/)) {
            // build query params
            let bundler = null; 

            fs.readFile(path.resolve(__dirname, './bundlerLocation.json'), (err, data) => {
                if (err) {
                    response.writeHead(500, {'Content-Type': 'text/plain'});
                    response.end('internal server error');
                    return null;
                }

               bundler = data.toString();
            });

            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(JSON.stringify({ response: 'OK'}));
            return;
        } else {
            return super.handle(request, response);
        }
    }
}

module.exports = { BundlerHandler };