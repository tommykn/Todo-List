let toDos = [];
let completedToDos = [];




const ToDoStructer = (function() {
    const _ToDo = function (task, description, dueDate, priority, difficulty) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.difficulty = difficulty;
    }
    _ToDo.prototype.editTask = function(newTask) {
        this.task = newTask;
    }

    const makeToDo = function(t, d, dd, p, dif) {
        const toDo = new _ToDo(t, d, dd, p, dif);
        return toDo;
    }
    
    return {
        makeToDo
    };

})();



export default ToDoStructer;