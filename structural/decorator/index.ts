import ConcreteComponent from "./concreteComponent";
import ConcreteDecorator1 from "./concreteDecorator1";
import ConcreteDecorator2 from "./concreteDecorator2";

const simple = new ConcreteComponent();
console.log(`simple: ${simple.execute()}`);
const decorator1 = new ConcreteDecorator1(simple);
const decorator2 = new ConcreteDecorator2(decorator1);
console.log(`decorators: ${decorator2.execute()}`);