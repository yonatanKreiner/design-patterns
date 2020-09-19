import Component1 from './component1';
import Component2 from './component2';
import ConcreteMediator from './concreteMediator';

const component1 = new Component1();
const component2 = new Component2();
const mediator = new ConcreteMediator(component1, component2);

component1.method1();
console.log('');
component2.method4();