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


function makeInitPage() {
    const header = makeContainer('header');
    const headerContent = makeTitle('headfe', 'asdf');
    header.appendChild(headerContent);
    const sideBar = makeContainer('sidebar');
    const todayBtn = makeTitle('today', 'today-btn');
    const monthsBtn = makeTitle('month', 'month-btn');
    const projectBtn = makeTitle('Projects', 'project-btn');
    sideBar.appendChild(todayBtn);
    sideBar.appendChild(monthsBtn);
    sideBar.appendChild(projectBtn);
    const mainDiv = makeContainer('main');
    const mainDivContent = makeTitle('sdfadfafas', 'main');
    mainDiv.appendChild(mainDivContent);
    const content = document.getElementById('content');
    content.appendChild(header);
    content.appendChild(sideBar);
    content.appendChild(mainDiv);
}

export default makeInitPage;