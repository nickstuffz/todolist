const projectsArray = [];

const projectFactory = function(title) {
    const tasksArray = [];

    return {
        title
    }
};

const tabFactory = function(name, priority, date, notes) {
    return {
        name, priority, date, notes
    }
}

function createProject() {
    const newProject = projectFactory('new project');
    projectsArray[projectsArray.length] = newProject;
    console.log(projectsArray);

    return newProject.title;
}

function createTab() {
    const newTab = tabFactory('new task', 0, "none", "empty");
    tasksArray[tasksArray.length] = newTab;
    console.log(tasksArray);

    return;


}

function pushTab() {
    const tab = document.createElement('div');
    const tab_container = document.getElementById('tab_container');

    tab.classList.add(..."w-11/12 h-9 bg-white rounded-br-lg rounded-tr-lg".split(' '));

    tab_container.append(tab);



    return;
}

export {createProject}