import Builder from "./builder";
import Product from './product';

class ConcreteBuilder implements Builder {
    private product: Product;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.product = new Product();
    }

    buildPartA(): void {
        this.product.parts.push('part A');
    }

    buildPartB(): void {
        this.product.parts.push('part B');
    }

    buildPartC(): void {
        this.product.parts.push('part C');
    }

    getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}

export default ConcreteBuilder;