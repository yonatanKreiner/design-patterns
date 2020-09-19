import BaseComponent from './baseComponent';

class Component2 extends BaseComponent {
    public method3(): void {
        console.log('Component2: method3');
        this.mediator.notify(this, 'method3');
    }

    public method4(): void {
        console.log('Component2: method4');
        this.mediator.notify(this, 'method4');
    }
}

export default Component2;