import ConcretePrototype from './concretePrototype'

const prototype = new ConcretePrototype();
prototype.field = 'my original field';

const cloned = prototype.clone();

if (prototype.field === cloned.field) {
    console.log(`same field: ${prototype.field}`);
} else {
    console.log('different fields');
}