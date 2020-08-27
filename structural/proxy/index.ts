import Service from './service'
import Proxy from './proxy';

const service = new Service();
service.operation();

const proxy = new Proxy(service);
proxy.operation();