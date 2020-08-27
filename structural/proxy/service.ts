import ServiceInterface from './serviceInterface';

class Service implements ServiceInterface {
    operation(): void {
        console.log('service: operation');
    }
}

export default Service;