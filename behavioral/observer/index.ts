import ConcreteSubject from './concreteSubject';
import ConcreteObserver1 from './concreteObserver1';
import ConcreteObserver2 from './concreteObserver2';

const concreteSubject = new ConcreteSubject();
const concreteObserver1 = new ConcreteObserver1();
const concreteObserver2 = new ConcreteObserver2();

concreteSubject.attach(concreteObserver1);
concreteSubject.attach(concreteObserver2);

concreteSubject.method('state1');
concreteSubject.method('state2');

concreteSubject.detach(concreteObserver2);

concreteSubject.method('state3');