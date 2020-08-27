import ServiceInterface from './serviceInterface';
import Service from './service';

class Proxy implements ServiceInterface {
    private service: Service

    constructor(service) {
        this.service = service;
    }

    operation(): void {
        console.log('proxy: before operation');
        this.service.operation();
        console.log('proxy: after operation');
    }
}

export default Proxy;