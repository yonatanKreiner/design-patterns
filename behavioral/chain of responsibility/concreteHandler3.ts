import BaseHandler from './baseHandler';

class ConcreteHandler3 extends BaseHandler {
    handle(request: string): void {
        if (request === 'request3') {
            console.log(`ConcreteHandler3: ${request}`);
        } else {
            super.handle(request);
        }
    }
}

export default ConcreteHandler3;