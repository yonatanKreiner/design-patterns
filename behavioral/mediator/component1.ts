import BaseComponent from './baseComponent';

class Component1 extends BaseComponent {
    public method1(): void {
        console.log('Component1: method1');
        this.mediator.notify(this, 'method1');
    }

    public method2(): void {
        console.log('Component1: method2');
        this.mediator.notify(this, 'method2');
    }
}

export default Component1;