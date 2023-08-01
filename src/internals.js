const projectsArray = [];

const projectMethods = {
  createTab() {
    let index = this.tabsArray.length;
    this.tabsArray[index] = tabFactory();
  },
  deleteProject() {
    projectsArray.splice(projectsArray.indexOf(this), 1);
  },
};

const tabMethods = {
  deleteTab(project) {
    project.tabsArray.splice(project.tabsArray.indexOf(this), 1);
  },
};

function projectFactory() {
  let title = "";
  const tabsArray = [];

  return Object.assign(Object.create(projectMethods), {
    title,
    tabsArray,
  });
}

function tabFactory() {
  let title = "";
  let priority = 0;
  let date = "date";
  let notes = "notes";

  return Object.assign(Object.create(tabMethods), {
    title,
    priority,
    date,
    notes,
  });
}

function createProject() {
  let index = projectsArray.length;
  projectsArray[index] = projectFactory();
}

export { createProject, projectsArray };
