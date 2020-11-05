import Context from "./context";

abstract class State {
    protected context: Context;

    public setContext(context: Context) {
        this.context = context;
    }

    public abstract methodA(): void;
    public abstract methodB(): void;
};

export default State;