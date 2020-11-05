import State from './state';

class ConcreteState2 extends State {
    public methodA(): void {
        console.log('ConcreteState2: methodA');
    }

    public methodB(): void {
        console.log('ConcreteState2: methodB');
    }
}

export default ConcreteState2;