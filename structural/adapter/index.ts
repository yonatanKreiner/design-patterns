import Client from './client';
import Service from './service';
import Adapter from './adapter';

const incompatibleData = 'one,two,three';
console.log('Working with client code:');
const client = new Client();
client.clientPrint(incompatibleData);

console.log('Working with service code (incompatible):');
const adaptee = new Service();
adaptee.print(incompatibleData)

console.log('Working with service code through adapter:');
const adapter = new Adapter(adaptee);
adapter.clientPrint(incompatibleData);