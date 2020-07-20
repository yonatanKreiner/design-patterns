import AbstractProductB from "./abstractProductB";
import AbstractProductA from "./abstractProductA";

class ConcreteProductB1 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'product B1';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `B1 collaborating with the (${result})`;
    }
}

export default ConcreteProductB1;