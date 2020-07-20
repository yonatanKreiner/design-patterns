import Creator from './creator';
import Product from './product';
import ConcreteProduct1 from './concreteProduct1';

class ConcreteCreator1 extends Creator {
    public createProduct(): Product {
        return new ConcreteProduct1();
    }
}

export default ConcreteCreator1;