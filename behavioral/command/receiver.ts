class Receiver {
    public executeA(payload: string): void {
        console.log(`Receiver: first method- ${payload}`);
    }

    public executeB(payload: string): void {
        console.log(`Receiver: second method- ${payload}`);
    }
}

export default Receiver;