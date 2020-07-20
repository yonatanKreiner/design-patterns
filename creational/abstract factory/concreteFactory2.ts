import AbstractFactory from "./abstractFactory";
import AbstractProductA from "./abstractProductA";
import AbstractProductB from "./abstractProductB";
import ConcreteProductA2 from "./concreteProductA2";
import ConcreteProductB2 from "./concreteProductB2";

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

export default ConcreteFactory2;