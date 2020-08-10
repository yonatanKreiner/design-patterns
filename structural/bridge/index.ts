import Abstraction from "./abstraction";
import ConcreteImplementation1 from "./concreteImplementation1";
import ConcreteImplementation2 from "./concreteImplementation2";
import RefinedAbstraction from "./refinedAbstraction";

const concreteImplementation1 = new ConcreteImplementation1();
let abstraction = new Abstraction(concreteImplementation1);
abstraction.feature1();

const concreteImplementation2 = new ConcreteImplementation2();
abstraction = new RefinedAbstraction(concreteImplementation2);
abstraction.feature1();