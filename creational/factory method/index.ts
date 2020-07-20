import Creator from "./creator";
import ConcreteCreator1 from "./concreteCreator1";
import ConcreteCreator2 from "./concreteCreator2";

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

clientCode(new ConcreteCreator1());
clientCode(new ConcreteCreator2());