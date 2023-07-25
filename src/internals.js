const projectsArray = [];

const projectMethods = {
  createTab() {},
  deleteProject() {},
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
  const index = projects.length;
  projectsArray[index] = projectFactory();
}

export { createProject };
