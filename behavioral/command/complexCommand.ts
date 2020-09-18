import Command from './command';
import Receiver from './receiver';

class ComplexCommand implements Command {
    private receiver: Receiver;
    private firstContext: string;
    private secondContext: string;

    constructor(receiver: Receiver, firstContext: string, secondContext: string) {
        this.receiver = receiver;
        this.firstContext = firstContext;
        this.secondContext = secondContext;
    }

    public execute(): void {
        this.receiver.executeA(this.firstContext);
        this.receiver.executeB(this.secondContext);
    }
}

export default ComplexCommand;