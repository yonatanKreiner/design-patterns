abstract class Component {
    protected parent: Component;

    public setParent(parent: Component) {
        this.parent = parent;
    }

    public getParent(): Component {
        return this.parent;
    }

    public add(component: Component): void { }

    public remove(component: Component): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}

export default Component;