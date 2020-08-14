import Decorator from "./decorator";

class ConcreteDecorator1 extends Decorator {
    public execute(): string {
        return `ConcreteDecorator1(${super.execute()})`;
    }
}

export default ConcreteDecorator1;