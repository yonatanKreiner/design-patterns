import Creator from './creator';
import Product from './product';
import ConcreteProduct2 from './concreteProduct2';

class ConcreteCreator2 extends Creator {
    public createProduct(): Product {
        return new ConcreteProduct2();
    }
}

export default ConcreteCreator2;