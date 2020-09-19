import Memento from './memento';
import ConcreteMemento from './concreteMemento';

class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public updateState(newState: string): void {
        this.state = newState;
        console.log(`Originator state: ${this.state}`);
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator restored state: ${this.state}`);
    } 
}

export default Originator;