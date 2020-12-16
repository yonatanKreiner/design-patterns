abstract class AbstractClass {
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    }

    protected baseOperation1(): void {
        console.log('AbstractClass: baseOperation1');
    }

    protected baseOperation2(): void {
        console.log('AbstractClass: baseOperation2');
    }

    protected baseOperation3(): void {
        console.log('AbstractClass: baseOperation3');
    }

    protected abstract requiredOperations1(): void;

    protected abstract requiredOperation2(): void;

    protected hook1(): void { }

    protected hook2(): void { }
}

export default AbstractClass;