import AbstractProductA from "./abstractProductA";

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'product A2';
    }
}

export default ConcreteProductA2;