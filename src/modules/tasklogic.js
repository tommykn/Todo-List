

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