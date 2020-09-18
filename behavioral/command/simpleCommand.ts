import Command from './command';

class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`SimpleCommand: ${this.payload}`);
    }
}

export default SimpleCommand;