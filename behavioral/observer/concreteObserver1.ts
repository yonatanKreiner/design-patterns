import Observer from './observer';

class ConcreteObserver1 implements Observer {
    public update(context: string): void {
        console.log(`ConcreteObserver1: ${context}`);
    }
}

export default ConcreteObserver1;