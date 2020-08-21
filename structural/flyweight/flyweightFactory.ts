import Flyweight from "./flyweight";

class FlyweightFactory {
    private cache: {[key: string]: Flyweight} = <any>{};

    constructor(flyweights: string[]) {
        for (const state of flyweights) {
            this.cache[state] = new Flyweight(state);
        }
    }

    public getFlyweight(extrinsicState: string): Flyweight {
        if (!(extrinsicState in this.cache)) {
            this.cache[extrinsicState] = new Flyweight(extrinsicState);
        }

        return this.cache[extrinsicState];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.cache).length;
        console.log(`FlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.cache) {
            console.log(key);
        }
    }
}

export default FlyweightFactory;