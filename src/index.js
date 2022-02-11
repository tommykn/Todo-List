import makeInitPage from './modules/page-load';

console.log('Hello World');


function ToDo(task, description, dueDate, priority, difficulty) {
    this.task = task;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.difficulty = difficulty;
}

ToDo.prototype.editTask = function(newTask) {
    this.task = newTask;
}

const clean = new ToDo('clean', 'I will be cleaning', '10/12/32', 'High', 'low');
console.log(clean);

clean.editTask('work');

console.log(clean);

makeInitPage();
