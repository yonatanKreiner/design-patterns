import Prototype from './prototype';

class ConcretePrototype implements Prototype {
    field: string;

    clone(): ConcretePrototype {
        const clone = new ConcretePrototype();
        clone.field = this.field;
        return clone;
    }
}

export default ConcretePrototype;