import ConcreteHandler1 from "./concreteHandler1";
import ConcreteHandler2 from "./concreteHandler2";
import ConcreteHandler3 from "./concreteHandler3";

const concreteHandler1 = new ConcreteHandler1();
const concreteHandler2 = new ConcreteHandler2();
const concreteHandler3 = new ConcreteHandler3();

concreteHandler1.setNext(concreteHandler2).setNext(concreteHandler3);

concreteHandler1.handle("request2");
concreteHandler1.handle("request4");