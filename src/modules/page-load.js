function makeContainer(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

function makeTitle(name, className) {
    const title = document.createElement('div');
    title.textContent = name;
    title.classList.add(className);
    return title;
}

function makeUnorderedList(className) {
    const list = document.createElement('ul');
    list.classList.add(className);
    return list;
}

function makeLI(name) {
    const li = document.createElement('li');
    li.textContent = name;
    return li;
}

function makeBtn(className) {
    const btn = document.createElement('button');
    btn.classList.add(className);
    btn.setAttribute('onclick', "this.blur();");
    return btn;
}


function makeInitPage() {
    const header = makeContainer('header');
    const headerContent = makeTitle('The Header', 'header-text');
    // modal btn
    const modalBtn = makeBtn('modal-btn');
    const btnText = makeTitle('+', 'modal-btn-text');
    modalBtn.appendChild(btnText);
    header.appendChild(headerContent);
    header.appendChild(modalBtn);
    const mainWrapper = makeContainer('main-wrapper');
    const sidenav = makeContainer('sidenav');
    const ul = makeUnorderedList('list');
    const today = makeLI('Today');
    const months = makeLI('Months');
    const projects = makeLI('Projects');
    ul.appendChild(today);
    ul.appendChild(months);
    ul.appendChild(projects);
    sidenav.appendChild(ul);
    mainWrapper.appendChild(sidenav);
    const main = makeContainer('main-content');
    // modal for inputing tasks
    const modal = makeContainer('modal');
    const modalContent = makeContainer('modal-content');
    modal.appendChild(modalContent);
    const taskForm = document.createElement('form');
    taskForm.classList.add('task-form');
    const formTitle = makeTitle('New Task', 'modal-title');
    taskForm.appendChild(formTitle);
    const requiredWrapper = makeContainer('required-info'); // required-wapper
    const modalTask = makeContainer('modal-task-wrapper');
    modalTask.classList.add('modal-text-input');
    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', 'task');
    taskLabel.textContent = 'Task:';
    modalTask.appendChild(taskLabel);
    const taskInput = document.createElement('input');
    taskInput.setAttribute('id', 'task');
    taskInput.setAttribute('name', 'task');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('required', '');
    modalTask.appendChild(taskInput);
    const modalDes = makeContainer('modal-des-wrapper');
    modalDes.classList.add('modal-text-input');
    const desLabel = document.createElement('label');
    desLabel.setAttribute('for', 'des');
    desLabel.textContent= 'Description:';
    modalDes.appendChild(desLabel);
    const desInput = document.createElement('input');
    desInput.setAttribute('id', 'des');
    desInput.setAttribute('name', 'des');
    desInput.setAttribute('type', 'text');
    desInput.setAttribute('required', '');
    modalDes.appendChild(desInput);
    requiredWrapper.appendChild(modalTask);
    requiredWrapper.appendChild(modalDes);
    taskForm.appendChild(requiredWrapper);
    // non-required wrapper need ot do moladcontetn.apopedntaskform
    const nonrequiredWrapepr = makeContainer('nonrequired-info');
    const difBtn = makeBtn('dif-btn');
    difBtn.textContent = 'Difficulty';
    const dateBtn = makeBtn('date-btn');
    dateBtn.textContent = 'Due Date';
    const priorityBtn = makeBtn('pri-btn');
    priorityBtn.textContent = 'Priority';
    nonrequiredWrapepr.appendChild(difBtn);
    nonrequiredWrapepr.appendChild(dateBtn);
    nonrequiredWrapepr.appendChild(priorityBtn);
    taskForm.appendChild(nonrequiredWrapepr);
    // add canel btns wrapper
    const addCancelWrapper = makeContainer('addcancelbtns-wrapper');
    const addBtn = makeBtn('add-btn');
    addBtn.textContent = 'Add';
    addBtn.setAttribute('id', 'submit-btn');
    addBtn.setAttribute('type', 'submit');
    const cancelBtn = makeBtn('cancel-btn');
    cancelBtn.textContent = 'Cancel';
    addCancelWrapper.appendChild(addBtn);
    addCancelWrapper.appendChild(cancelBtn);
    taskForm.appendChild(addCancelWrapper);
    modalContent.appendChild(taskForm);
    mainWrapper.appendChild(modal);









    const home = makeContainer('home');
    const homeHeader = makeContainer('home-header');
    const homeHeaderText = makeTitle('Home', 'home-text');
    homeHeader.appendChild(homeHeaderText);
    home.appendChild(homeHeader)
    const homeToDos = makeContainer('home-todos');
    home.appendChild(homeToDos);
    main.appendChild(home);
    mainWrapper.appendChild(main);
    const footer = makeContainer('footer');
    const footerContent = makeTitle('Footer', 'footer-text');
    footer.appendChild(footerContent);
    const contentID = document.getElementById('content');
    contentID.appendChild(header);
    contentID.appendChild(mainWrapper);
    contentID.appendChild(footer);
}

export default makeInitPage;