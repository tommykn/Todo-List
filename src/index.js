import makeInitPage from './modules/page-load';
import { ToDoStructer, infoHolder } from './modules/tasklogic';

console.log('Hello World');


makeInitPage();

const clean = ToDoStructer.makeToDo('clean', 'cleaning', '10/21/23', 'Hard', 'easy');

infoHolder.addToDo(clean);

const array = infoHolder.getToDoArray();

console.log(array);

clean.editTask('working');

console.log(array);

const workout = ToDoStructer.makeToDo('workout', 'push-ups', 'today', 'meduim', 'hard');

infoHolder.addToDo(workout);

console.log(array);

workout.editTask('popout');
