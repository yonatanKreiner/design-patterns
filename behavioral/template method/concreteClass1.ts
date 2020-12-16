import AbstractClass from './abstractClass';

class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass1: Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass1: Operation2');
    }
}

export default ConcreteClass1;