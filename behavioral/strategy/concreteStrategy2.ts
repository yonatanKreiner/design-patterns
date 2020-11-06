import Strategy from "./strategy";

class ConcreteStrategy2 implements Strategy {
    sort(array: number[]): number[] {
        return array.reverse();
    }
}

export default ConcreteStrategy2;