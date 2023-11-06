class BaseHandler {
    #nextHandler;

    setNext(handler) {
        this.#nextHandler = handler;
        return handler;
    }

    handle(request, response) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        response.writeHead(500, {'Content-Type': 'application/json'})

        response.end(JSON.stringify({ response: 'not found'}));

        return null;
    }
}

module.exports = { BaseHandler };