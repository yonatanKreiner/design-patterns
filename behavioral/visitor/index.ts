import ConcreteComponentA from './concreteComponentA';
import ConcreteComponentB from './concreteComponentB';
import ConcreteVisitor1 from './concreteVisitor1';
import ConcreteVisitor2 from './concreteVisitor2';

const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
];

const visitor1 = new ConcreteVisitor1();

for (const component of components) {
    component.accept(visitor1);
}

console.log('');

const visitor2 = new ConcreteVisitor2();

for (const component of components) {
    component.accept(visitor2);
}