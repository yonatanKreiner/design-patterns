import Decorator from "./decorator";

class ConcreteDecorator2 extends Decorator {
    public execute(): string {
        return `ConcreteDecorator2(${super.execute()})`;
    }
}

export default ConcreteDecorator2;