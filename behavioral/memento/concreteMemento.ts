import Memento from './memento';

class ConcreteMemento implements Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}

export default ConcreteMemento;