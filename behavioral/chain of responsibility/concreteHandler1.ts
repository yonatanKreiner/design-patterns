import BaseHandler from './baseHandler';

class ConcreteHandler1 extends BaseHandler {
    handle(request: string): void {
        if (request === 'request1') {
            console.log(`ConcreteHandler1: ${request}`);
        } else {
            super.handle(request);
        }
    }
}

export default ConcreteHandler1;