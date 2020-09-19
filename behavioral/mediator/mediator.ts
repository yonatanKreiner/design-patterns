export default interface Mediator {
    notify(sender: object, event: string): void;
};