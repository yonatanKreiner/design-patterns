import Mediator from './mediator';
import Component1 from './component1';
import Component2 from './component2';

class ConcreteMediator implements Mediator {
    private component1: Component1;
    private component2: Component2;

    constructor(component1: Component1, component2: Component2) {
        this.component1 = component1;
        this.component1.setMediator(this);
        this.component2 = component2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'method1') {
            console.log('Mediator: method1 triggers:');
            this.component2.method3();
        }

        if (event === 'method4') {
            console.log('Mediator: method4 triggers:');
            this.component1.method2();
            this.component2.method3();
        }
    }
}

export default ConcreteMediator;