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
  deleteTab() {},
};

function projectFactory() {
  let title = "new project";
  const tabsArray = [];

  return Object.assign(Object.create(projectMethods), {
    title,
    tabsArray,
  });
}

function tabFactory() {
  let title = "new tab";
  let priority = 0;
  let date = "date";
  let notes = "notes";

  return Object.assign(Object.create(projectMethods), {
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
