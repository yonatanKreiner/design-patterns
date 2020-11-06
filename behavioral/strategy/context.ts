import Strategy from "./strategy";

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public execute(array: number[]): number[] {
        return this.strategy.sort(array);
    }
}

export default Context;