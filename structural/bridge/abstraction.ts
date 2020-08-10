import Implementation from './implementation';

class Abstraction {
    protected implementation

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    feature1(): void {
        console.log('abstraction');
        this.implementation.method1();
    }
}

export default Abstraction;