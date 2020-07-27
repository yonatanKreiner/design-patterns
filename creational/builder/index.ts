import ConcreteBuilder from './concreteBuilder';
import Director from './director';

const builder = new ConcreteBuilder();
const director = new Director(builder);

console.log('Basic product:');
director.buildMinimalProduct();
builder.getProduct().listParts();

console.log('Full featured product:');
director.buildFullFeaturedProduct();
builder.getProduct().listParts();

// The Builder pattern can be used without a Director class
console.log('Custom product:');
builder.buildPartA();
builder.buildPartC();
builder.getProduct().listParts();