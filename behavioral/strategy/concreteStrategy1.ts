import Strategy from "./strategy";

class ConcreteStrategy1 implements Strategy {
    sort(array: number[]): number[] {
        return array.sort();
    }
}

export default ConcreteStrategy1;