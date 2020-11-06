import Context from './context';
import ConcreteStrategy1 from './concreteStrategy1';
import ConcreteStrategy2 from './concreteStrategy2';

const array: number[] = [3, 5, 2, 1, 4];

const concreteStrategy1 = new ConcreteStrategy1();
const concreteStrategy2 = new ConcreteStrategy2();

const context = new Context(concreteStrategy1);
const firstSort = context.execute(array)
console.log(`ConcreteStrategy1: ${firstSort}`);

context.setStrategy(concreteStrategy2);
const secondSort = context.execute(array)
console.log(`concreteStrategy2: ${secondSort}`);