import Subject from './subject';
import Observer from './observer';

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: string;

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            console.log('Subject: Observer has been attached already');
        }

        this.observers.push(observer);   
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            console.log('Subject: Nonexistent observer');
        }

        this.observers.splice(observerIndex, 1);
    }

    public notify(): void {
        this.observers.forEach(observer => {
            observer.update(this.state);
        });
    }

    public method(newState: string): void {
        this.state = newState;
        this.notify();
    }
}

export default ConcreteSubject;