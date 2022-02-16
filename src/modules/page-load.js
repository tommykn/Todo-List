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