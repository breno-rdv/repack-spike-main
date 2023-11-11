const fs = require('fs');
const url = require("url");
const path = require('path');

const { BaseHandler } = require('./BaseHandler');

class BundlerHandler extends BaseHandler {
    handle(request, response) {
        const requestUrl = url.parse(request.url);
        if (requestUrl.pathname === '/repackminiapp') {
            const [ platform, appVersion] = requestUrl.query.split('&').map(query => {
                const [ queryKey, querySearch] = query.split('=');
                return {
                    [queryKey]: querySearch
                }
            });

            let bundler = null; 

            fs.readFile(path.resolve(__dirname, './bundlerLocation.json'), (err, data) => {
                if (err) {
                    response.writeHead(500, {'Content-Type': 'text/plain'});
                    response.end('internal server error');
                    return null;
                }

                bundler = JSON.parse(data.toString());

                const apiResponse = bundler[platform['platform']]?.[appVersion['appVersion']];

                if (!apiResponse) {
                    response.writeHead(404, {'Content-Type': 'text/plain'});
                    response.end('Not found');
                    return null;
                }

                response.writeHead(200, {'Content-Type': 'application/json'});

                response.end(JSON.stringify({ url: apiResponse }));
                return;
            });
        } else {
            return super.handle(request, response);
        }
    }
}

module.exports = { BundlerHandler };
