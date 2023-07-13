import add_svg from './add.svg';

const projectsArray = [];

const projectFactory = function(title) {
    const tasksArray=[];

    return {
        title: title
    }
};

function createProject() {
    const newProject = projectFactory('new project');
    projectsArray[projectsArray.length] = newProject;
    console.log(projectsArray);
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