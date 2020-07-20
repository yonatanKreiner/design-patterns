import AbstractProductA from "./abstractProductA";
import AbstractProductB from "./abstractProductB";

export default interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}