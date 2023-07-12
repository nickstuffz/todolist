import add_svg from './add.svg';

// const projectsArray = [];

// const projectFactory = function(title) {
//     return {title}
// };

// function createProject() {
//     const newProject = projectFactory('new project');
//     pushProject();

//     return;
// }


function createProject() {
    const grid = document.getElementById('grid');
    const proj = document.createElement('div');
    const proj_header = document.createElement('div');
    const tab_container = document.createElement('div');
    const addTab_container = document.createElement('div');
    const proj_title = document.createElement('div');
    const addTab = new Image();
    addTab.src = add_svg;

    proj.classList.add(..."w-full h-96 border-4 border-white flex flex-col gap-3".split(' '));
    proj_header.classList.add(..."flex justify-between".split(' '));
    tab_container.classList.add(..."flex flex-col gap-2".split(' '));
    addTab.classList.add(..."border-dotted border-l-2 border-b-2 border-r-2 p-1 ml-4".split(' '));
    proj_title.classList.add(..."w-3/4 h-12 border-l-4 border-b-4 border-dotted border-white rounded-br-md".split(' '));

    grid.append(proj);
    proj.append(proj_header, tab_container);
    proj_header.append(addTab_container, proj_title);
    addTab_container.append(addTab);

    proj_title.addEventListener('click', Clicks.proj_titleClick);
    addTab.addEventListener('click', Clicks.addTabClick);
    
    return;
}

const Clicks = {
    proj_titleClick() {

    },

    addTabClick() {
        createTab();
        return;
    },

    tabClick() {

    },
};

function createTab() {
    const tab = document.createElement('div');
    const tab_container = document.getElementById('tab_container');

    tab.classList.add(..."w-11/12 h-9 bg-white rounded-br-lg rounded-tr-lg".split(' '));

    tab_container.append(tab);

    // issue, how do i reference the project that the evenlistener is activated in?
    // do i need to change how projects are created?

    return;
}

export {createProject}