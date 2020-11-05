import Context from "./context";
import ConcreteState1 from "./concreteState1";

const concreteState1 = new ConcreteState1();
const context = new Context(concreteState1);
context.methodA();
context.methodB();