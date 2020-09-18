import Invoker from "./invoker";
import Receiver from "./receiver";
import ComplexCommand from "./complexCommand";
import SimpleCommand from "./simpleCommand";

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('simple command payload'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

invoker.execute();