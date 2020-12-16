import Component from './component';
import Visitor from './visitor';

class ConcreteComponentB implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }

    public ConcreteComponentBMethod(): string {
        return 'ConcreteComponentB';
    }
}

export default ConcreteComponentB;