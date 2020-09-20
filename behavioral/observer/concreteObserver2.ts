import Observer from './observer';

class ConcreteObserver2 implements Observer {
    public update(context: string): void {
        console.log(`ConcreteObserver2: ${context}`);
    }
}

export default ConcreteObserver2;