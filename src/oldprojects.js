const projectsArray = [];

function projectFactory(title) {
  const tasksArray = [];

  const createTab = function () {
    const newTab = tabFactory("new task", 0, "none", "empty");
    tasksArray[tasksArray.length] = newTab;
    // console.log(projectsArray);
    console.log(tasksArray);

    // temporary code

    const tab = document.createElement("div");
    const tab_container = document.getElementById("tab_container");

    tab.classList.add(
      ..."w-11/12 h-9 bg-white rounded-br-lg rounded-tr-lg".split(" "),
    );

    tab.className = "pt-2 p-4";

    tab_container.append(tab);
  };

  return {
    title,
    createTab,
  };
}

function tabFactory(name, priority, date, notes) {
  return {
    name,
    priority,
    date,
    notes,
  };
}

function createProject() {
  const newProject = projectFactory("new project testpotato");
  projectsArray[projectsArray.length] = newProject;

  return newProject;
}

// update DOM from projectsArray?

// perhaps DOM should have an update listener or change function

// then it pushes any changes into the DOM

// forEach project in projects:

export { createProject, projectsArray };
