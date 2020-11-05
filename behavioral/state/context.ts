import State from './state';

class Context {
    private state: State;

    constructor(state: State) {
        this.changeState(state);
        this.state.setContext(this);
    }

    public changeState(state: State) {
        this.state = state;
    }

    public methodA(): void {
        this.state.methodA();
    }

    public methodB(): void {
        this.state.methodB();
    }
}

export default Context;