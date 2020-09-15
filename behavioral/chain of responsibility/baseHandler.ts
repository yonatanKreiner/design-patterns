import Handler from "./handler";

abstract class BaseHandler implements Handler {
    private next: Handler;

    setNext(handler: Handler): Handler {
        this.next = handler;
        return handler;
    }
    
    handle(request: string): void {
        if (this.next) {
            this.next.handle(request);
        } else {
            console.log(`BaseHandler: ${request}`);
        }
    }
}

export default BaseHandler;