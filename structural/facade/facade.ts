import Subsystem1 from "./subsystem1";
import Subsystem2 from "./subsystem2";

class Facade {
    protected subsystem1: Subsystem1;
    protected subsystem2: Subsystem2;

    constructor(subsystem1: Subsystem1 = null, subsystem2: Subsystem2 = null) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    public operation(): void {
        console.log('Facade executes the subsystems:');
        console.log(this.subsystem1.operation1());
        console.log(this.subsystem2.operation1());
        console.log('Facade orders the subsystems:');
        console.log(this.subsystem1.operation2());
        console.log(this.subsystem2.operation2());
    }
}

export default Facade;