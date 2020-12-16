import AbstractClass from './abstractClass';

class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass2: Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass2: Operation2');
    }

    protected hook1(): void {
        console.log('ConcreteClass2: Hook1');
    }
}

export default ConcreteClass2;