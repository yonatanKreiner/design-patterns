import Component from "./component";

class Decorator implements Component {
    private wrapee: Component;

    constructor(wrapee: Component) {
        this.wrapee = wrapee;
    }

    execute(): string {
        return this.wrapee.execute();
    }
}

export default Decorator;