class Flyweight {
    private intrinsicState: any;

    constructor(intrinsicState: any) {
        this.intrinsicState = intrinsicState;
    }

    public operation(extrinsicState): void {
        const intrinsic = JSON.stringify(this.intrinsicState);
        const extrinsic = JSON.stringify(extrinsicState);
        console.log(`Flyweight: Displaying intrinsic (${intrinsic}) and extrinsic (${extrinsic}) state.`);
    }
}

export default Flyweight;