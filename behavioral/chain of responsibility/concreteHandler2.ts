import BaseHandler from './baseHandler';

class ConcreteHandler2 extends BaseHandler {
    handle(request: string): void {
        if (request === 'request2') {
            console.log(`ConcreteHandler2: ${request}`);
        } else {
            super.handle(request);
        }
    }
}

export default ConcreteHandler2;