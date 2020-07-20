import AbstractFactory from "./abstractFactory";
import ConcreteFactory1 from "./concreteFactory1";
import ConcreteFactory2 from "./concreteFactory2";

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

clientCode(new ConcreteFactory1());
clientCode(new ConcreteFactory2());