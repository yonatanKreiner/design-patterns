import Iterator from './iterator';

export default interface Aggregator {
    getIterator(): Iterator<string>;
}