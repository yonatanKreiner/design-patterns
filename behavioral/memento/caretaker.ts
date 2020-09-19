import Memento from './memento';
import Originator from './originator';

class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (this.mementos.length) {
            const memento = this.mementos.pop();
            this.originator.restore(memento);
        }
    }

    public showHistory(): void {
        console.log('Caretaker mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getState());
        }
    }
}

export default Caretaker;