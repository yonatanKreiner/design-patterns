import Abstraction from "./abstraction";

class RefinedAbstraction extends Abstraction {
    feature1(): void {
        console.log('refined abstraction');
        this.implementation.method1();
        this.implementation.method2();
    }
}

export default RefinedAbstraction;