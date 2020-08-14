import Component from "./component";

class ConcreteComponent implements Component {
    execute(): string {
        return 'ConcreteComponent';
    }
}

export default ConcreteComponent;