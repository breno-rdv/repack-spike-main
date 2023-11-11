const { BaseHandler } = require("./BaseHandler");

class BasePathHandler extends BaseHandler {
    handle(request, response) {
        if (request.url === '/') {
            response.writeHead(200, {'Content-Type': 'text/html'});

            response.end(
                `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Bundler Server</title>
                    </head>
                    <body>
                        <h1>Welcome to Bundler Server</h1>
                    </body>
                </html>`
            );
            return;
        }
        return super.handle(request, response);
    }
}

module.exports = { BasePathHandler };
