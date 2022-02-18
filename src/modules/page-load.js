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
function makeNamedBtn(name, className, className1) {
    const btn = document.createElement('button');
    btn.classList.add(className);
    btn.classList.add(className1);
    btn.textContent = name;
    btn.setAttribute('onclick', "this.blur();");
    return btn;
}

function makeDifficultyModal() {
    const difmodal = makeContainer('dif-modal');
    const lv1 = makeNamedBtn('Lv1', 'lv1', 'lv-btn');
    const lv2 = makeNamedBtn('Lv2', 'lv2', 'lv-btn'); 
    const lv3 = makeNamedBtn('Lv3', 'lv3', 'lv-btn'); 
    const lv4 = makeNamedBtn('Lv4', 'lv4', 'lv-btn'); 
    const lv5 = makeNamedBtn('Lv5', 'lv5', 'lv-btn');
    difmodal.appendChild(lv1);
    difmodal.appendChild(lv2);
    difmodal.appendChild(lv3);
    difmodal.appendChild(lv4);
    difmodal.appendChild(lv5);
    return difmodal;
}

function makePriorityModal() {
    const difmodal = makeContainer('pri-modal');
    const pr1 = makeNamedBtn('low', 'pri1', 'pri-btn');
    const pr2 = makeNamedBtn('meduim', 'pri2', 'pri-btn'); 
    const pr3 = makeNamedBtn('high', 'pri3', 'pri-btn'); 
    const pr4 = makeNamedBtn('severe', 'pri4', 'pri-btn'); 
    difmodal.appendChild(pr1);
    difmodal.appendChild(pr2);
    difmodal.appendChild(pr3);
    difmodal.appendChild(pr4);
    return difmodal;
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
    const difModal = makeDifficultyModal();
    const priModal = makePriorityModal();
    modal.appendChild(priModal);
    modal.appendChild(difModal);
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
    difBtn.setAttribute('data-level', 'none');


    const dateBtn = document.createElement('input');
    dateBtn.setAttribute('type', 'date');
    dateBtn.setAttribute('name', 'date-picker');
    dateBtn.setAttribute('value', '2022-02-18');





    const priorityBtn = makeBtn('mainPri-btn');
    priorityBtn.textContent = 'Priority';
    priorityBtn.setAttribute('data-priority', 'none');
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



    // event listners
    const lvBtns = document.querySelectorAll('.lv-btn');
    const lvBtnsArray = Array.from(lvBtns);
    const priBtns = document.querySelectorAll('.pri-btn');
    console.log(priBtns);
    priBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            priorityBtn.dataset.priority = e.target.textContent;
            for (let i = 0; i < priBtns.length; i++) {
                if (priBtns[i].classList.length === 3) {
                    priBtns[i].classList.toggle('green-background');
                }
            }
            e.target.classList.toggle('green-background');
        });
    });


    lvBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            difBtn.dataset.level = e.target.textContent;
            for (let i = 0; i < lvBtnsArray.length; i++) {
                if (lvBtnsArray[i].classList.length === 3) {
                lvBtnsArray[i].classList.toggle('green-background');
                }
            }
            e.target.classList.toggle('green-background');
        });
    });



    difBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (priModal.style.display === 'flex') {
            priModal.style.display = 'none';
        }
        difModal.style.display = 'flex';
    });

    priorityBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (difModal.style.display === 'flex') {
            difModal.style.display = 'none';
        }
        priModal.style.display = 'flex';
    });

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal || e.target == modalContent) {
            if (difModal.style.display === 'flex' || priModal.style.display === 'flex') {
                difModal.style.display = 'none';
                priModal.style.display = 'none';
                return;
            }

        }
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

export default makeInitPage;