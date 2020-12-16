import Visitor from './visitor';
import ConcreteComponentA from './concreteComponentA';
import ConcreteComponentB from './concreteComponentB';

class ConcreteVisitor2 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`ConcreteVisitor2: ${element.ConcreteComponentAMethod()}`);
    }

    public visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`ConcreteVisitor2: ${element.ConcreteComponentBMethod()}`);
    }
}

export default ConcreteVisitor2;