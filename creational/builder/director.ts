import Builder from "./builder";
class Director {
    private builder: Builder;

    constructor(builder) {
        this.builder = builder;
    }

    public buildMinimalProduct() {
        this.builder.buildPartA();
    }

    public buildFullFeaturedProduct() {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }
}

export default Director;