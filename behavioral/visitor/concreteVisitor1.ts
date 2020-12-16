import Visitor from './visitor';
import ConcreteComponentA from './concreteComponentA';
import ConcreteComponentB from './concreteComponentB';

class ConcreteVisitor1 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`ConcreteVisitor1: ${element.ConcreteComponentAMethod()}`);
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`ConcreteVisitor1: ${element.ConcreteComponentBMethod()}`);
    }
}

export default ConcreteVisitor1;