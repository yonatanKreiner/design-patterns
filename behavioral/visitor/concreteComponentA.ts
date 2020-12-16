import Component from './component';
import Visitor from './visitor';

class ConcreteComponentA implements Component {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    public ConcreteComponentAMethod(): string {
        return 'ConcreteComponentA';
    }
}

export default ConcreteComponentA;