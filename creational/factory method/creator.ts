import Product from "./product";

abstract class Creator {
    public abstract createProduct() : Product;

    public someOperation(): string {
        const product = this.createProduct();
        return product.operation();
    }
}

export default Creator;