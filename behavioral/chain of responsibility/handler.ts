export default interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}