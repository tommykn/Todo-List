

const ToDoStructer = (function() {
    const _ToDo = function (task, description, dueDate, priority, difficulty, completed) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.difficulty = difficulty;
        this.completed = completed;
    };
    _ToDo.prototype.editTask = function(newTask) {
        this.task = newTask;
    };
    _ToDo.prototype.editDescription = function(newDes) {
        this.description = newDes;
    };
    _ToDo.prototype.editDueDate = function(newDate) {
        this.dueDate = newDate;
    };
    _ToDo.prototype.editPriority = function(newPri) {
        this.priority = newPri;
    };
    _ToDo.prototype.editDifficulty = function(newDif) {
        this.difficulty = newDif;
    };
    _ToDo.prototype.editCompleted = function(newStatus) {
        this.completed = newStatus;
    }

    const makeToDo = function(t, des, dd, p, dif, com) {
        const toDo = new _ToDo(t, des, dd, p, dif, com);
        return toDo;
    };
    
    return {
        makeToDo
    };

})();

const infoHolder = (function() {
    let _toDos = [];
    let _completedToDos = [];

    const addToDo = function(toDo) {
        _toDos.push(toDo);
    }
    const getToDoArray = function() {
        return _toDos;
    }


    return {
        addToDo,
        getToDoArray,
    };

})();



export {infoHolder, ToDoStructer};