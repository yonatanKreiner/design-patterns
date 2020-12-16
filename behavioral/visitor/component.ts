import Visitor from './visitor';

export default interface Component {
    accept(visitor: Visitor): void;
};