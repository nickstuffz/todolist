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

function saveLocalData() {
  const myJSON = JSON.stringify(projectsArray);
  localStorage.setItem("projectsArray_string", myJSON);
}

function applyLocalData() {
  // retrieve local data
  const myJSON = localStorage.getItem("projectsArray_string");
  if (myJSON === null) {
    console.log("its null");
    return;
  }
  const savedArray = JSON.parse(myJSON);

  // assigning methods to local data
  savedArray.forEach((project) => {
    Object.assign(project, projectMethods);
    project.tabsArray.forEach((tab) => {
      Object.assign(tab, tabMethods);
    });
  });

  // apply local data
  Object.assign(projectsArray, savedArray);
}

export { createProject, projectsArray, saveLocalData, applyLocalData };
