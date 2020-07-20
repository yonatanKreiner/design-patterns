import AbstractFactory from "./abstractFactory";
import AbstractProductA from "./abstractProductA";
import AbstractProductB from "./abstractProductB";
import ConcreteProductA1 from "./concreteProductA1";
import ConcreteProductB1 from "./concreteProductB1";

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

export default ConcreteFactory1;