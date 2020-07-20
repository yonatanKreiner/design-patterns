import Product from './product';

class ConcreteProduct1 implements Product{
    public operation(): string {
        return 'ConcreteProduct1';
    }
}

export default ConcreteProduct1;