import AbstractProductA from "./abstractProductA";

class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'product A1';
    }
}

export default ConcreteProductA1;