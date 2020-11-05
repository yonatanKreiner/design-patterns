import ConcreteState2 from './concreteState2';
import State from './state';

class ConcreteState1 extends State {
    public methodA(): void {
        console.log('ConcreteState1: methodA');
        const state2 = new ConcreteState2();
        this.context.changeState(state2);
    }

    public methodB(): void {
        console.log('ConcreteState1: methodB');
    }
}

export default ConcreteState1;