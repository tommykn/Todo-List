import makeInitPage from './modules/page-load';
import ToDoStructer from './modules/tasklogic';

console.log('Hello World');


makeInitPage();

const clean = ToDoStructer.makeToDo('clean', 'cleaning', '10/21/23', 'Hard', 'easy');

console.log(clean);

// clean.editTask('working');

// console.log(clean);