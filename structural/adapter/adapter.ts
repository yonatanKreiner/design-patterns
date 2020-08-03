import ClientInterface from './clientInterface';
import Service from './service';

class Adapter implements ClientInterface{
    private adaptee: Service;

    constructor(service: Service) {
        this.adaptee = service;
    }

    clientPrint(text: string): void {
        const parsedText = text.split(',').join('-');
        this.adaptee.print(parsedText);
    }
}

export default Adapter;