import makeInitPage from './modules/page-load';
import { ToDoStructer, infoHolder } from './modules/tasklogic';
import DomController from './modules/domcontroller';

console.log('Hello World');


makeInitPage();

const clean = ToDoStructer.makeToDo('clean', 'cleaning the kitchen', '10/21/23', '!!!', 'easy', false);
const workout = ToDoStructer.makeToDo('workout', 'push-ups', 'today', 'meduim', 'hard', false);

const homeTodos = document.querySelector('.home-todos');

const cleanDomObj = DomController.returnDomToDo(clean);

homeTodos.appendChild(cleanDomObj);

