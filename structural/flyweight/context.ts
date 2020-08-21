import Flyweight from "./flyweight";
import FlyweightFactory from "./flyweightFactory";

const flyweightFactory: FlyweightFactory = new FlyweightFactory(['state1', 'state2', 'state3']);

class Context {
    private flyweight: Flyweight;
    private extrinsicState;

    constructor(intrinsicState, extrinsicState) {
        this.extrinsicState = extrinsicState;
        this.flyweight = flyweightFactory.getFlyweight(intrinsicState);
    }

    public operation() {
        this.flyweight.operation(this.extrinsicState);
    }

    public listFlyweights() {
        flyweightFactory.listFlyweights();
    }
}

export default Context;