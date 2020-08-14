import Composite from "./composite";
import Leaf from "./leaf";
import Component from "./component";

const simple = new Leaf();
console.log(`simple component: ${simple.operation()}`);

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log(`composite tree: ${tree.operation()}`);

// client does not need to check the components classes if isComposite is in base interface
if (tree.isComposite()) {
    tree.add(simple);
}
console.log(`result: ${tree.operation()}`);