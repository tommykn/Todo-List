

const DomController = (function() {
    const _makeContainer = function(className) {
        const div = document.createElement('div');
        div.classList.add(className);
        return div;
    };
    const _makeTitle = function(name, className) {
        const title = document.createElement('div');
        title.textContent = name;
        title.classList.add(className);
        return title;
    };
    const _makeBtn = function(name, className) {
        const btn = document.createElement('button');
        btn.textContent = name;
        btn.classList.add(className);
        return btn;
    };


    const returnDomToDo = function(todoObj) {
        const toDo = _makeContainer('todo');
        // checkmark and priority box
        const checkPri = _makeContainer('checkmark-pri');
        const checkmark = _makeTitle('_', 'check');
        const priority = _makeTitle(`${todoObj.priority}`, 'priority');
        checkPri.appendChild(checkmark);
        checkPri.appendChild(priority);
        toDo.appendChild(checkPri);
        // the todo-contetn box
        const todoContent = _makeContainer('todo-content');
        const nameDes = _makeContainer('name-des');
        const name = _makeTitle(`${todoObj.task}`, 'name');
        const description = _makeTitle(`${todoObj.description}`, 'des');
        nameDes.appendChild(name);
        nameDes.appendChild(description);
        todoContent.appendChild(nameDes);
        // the level
        const levelWrapper = _makeContainer('lvl-wrapper');
        const dif = _makeTitle(`${todoObj.difficulty}`, 'dif');
        const level = _makeTitle('lvl.', 'level');
        levelWrapper.appendChild(level);
        levelWrapper.appendChild(dif);
        todoContent.appendChild(levelWrapper);
        const dueDifBtns = _makeContainer('due-btns');
        const dueDif = _makeContainer('due-wrapper');
        const dueDate = _makeTitle(`${todoObj.dueDate}`, 'due-date');
        dueDif.appendChild(dueDate);
        dueDifBtns.appendChild(dueDif);
        const btns = _makeContainer('btns');
        const editBtn = _makeBtn('edit', 'edit-btn');
        const deleteBtn = _makeBtn('delete', 'delete-btn');
        btns.appendChild(editBtn);
        btns.appendChild(deleteBtn);
        dueDifBtns.appendChild(btns);
        todoContent.appendChild(dueDifBtns);
        toDo.appendChild(todoContent);
        return toDo;
    };

    return {
        returnDomToDo,
    }

})();

export default DomController;