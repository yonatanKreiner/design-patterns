import ConcreteComponentA from './concreteComponentA';
import ConcreteComponentB from './concreteComponentB';

export default interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;
};