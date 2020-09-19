import Originator from './originator';
import Caretaker from './caretaker';

const originator = new Originator('original string');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.updateState('string 2');

caretaker.backup();
originator.updateState('string 3');

caretaker.backup();
originator.updateState('string 4');

caretaker.showHistory();

caretaker.undo();
caretaker.undo();