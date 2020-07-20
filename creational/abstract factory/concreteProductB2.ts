import AbstractProductB from "./abstractProductB";
import AbstractProductA from "./abstractProductA";

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'product B2';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `B2 collaborating with the (${result})`;
    }
}

export default ConcreteProductB2;