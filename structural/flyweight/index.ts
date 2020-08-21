import Context from './context';

const context = new Context('state2', 'state1');
context.listFlyweights();
context.operation();

const context2 = new Context('state4', 'state1');
context2.listFlyweights();
context2.operation();

