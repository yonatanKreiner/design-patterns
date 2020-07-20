import Product from './product';

class ConcreteProduct2 implements Product{
    public operation(): string {
        return 'ConcreteProduct2';
    }
}

export default ConcreteProduct2;