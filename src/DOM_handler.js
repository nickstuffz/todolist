import { createProject, projectsArray } from "./internals.js";
import add_svg from "./add.svg";
import close_svg from "./close.svg";

const content = document.getElementById("content");
const header = document.createElement("div");
const addProj = document.createElement("div");
const logo_box = document.createElement("div");
const logo = document.createElement("div");
const grid = document.createElement("div");

function loadHeader() {
  header.classList.add(
    ..."flex justify-between border-b-4 border-white pt-4".split(" "),
  );
  addProj.classList.add(
    ..."ml-4 border-l-4 border-r-4 border-t-4 border-dotted border-white p-2 text-white".split(
      " ",
    ),
  );
  logo_box.classList.add(..."w-72 bg-white".split(" "));
  logo.classList.add(..."pt-1.5 text-center text-3xl font-bold".split(" "));

  addProj.innerText = "add project";
  logo.innerText = "Simple. Tasks";

  addProj.addEventListener("click", Clicks.addProj_click);

  content.append(header);
  header.append(addProj, logo_box);
  logo_box.append(logo);
}

function loadGrid() {
  grid.classList.add(..."grid grid-cols-auto gap-4 p-6".split(" "));
  grid.id = "grid";

  content.append(grid);
}

function clearProjects() {
  let projects = document.getElementsByClassName("project");
  while (projects[0]) {
    projects[0].parentNode.removeChild(projects[0]);
  }
}

function pushProjects() {
  projectsArray.forEach((project) => {
    const proj = document.createElement("div");
    const proj_header = document.createElement("div");
    const proj_title = document.createElement("div");
    const addTab_container = document.createElement("div");
    const addTab = new Image();
    addTab.src = add_svg;
    const tab_container = document.createElement("div");
    const closeProj_container = document.createElement("div");
    const closeProj = new Image();
    closeProj.src = close_svg;

    proj.classList.add(
      ..."project relative w-full h-96 border-4 border-white flex flex-col gap-3".split(
        " ",
      ),
    );
    proj_header.classList.add(..."flex justify-between".split(" "));
    proj_title.classList.add(
      ..."w-3/4 h-12 border-l-4 border-b-4 border-dotted border-white text-center text-white font-bold text-2xl pt-1.5".split(
        " ",
      ),
    );
    addTab.classList.add(
      ..."border-dotted border-white border-l-2 border-b-2 border-r-2 p-1 ml-4".split(
        " ",
      ),
    );
    tab_container.classList.add(
      ..."tab_container flex flex-col gap-2".split(" "),
    );
    closeProj.classList.add(
      ..."absolute bottom-0 right-0 border-l-2 border-t-2 border-dotted border-white p-1".split(
        " ",
      ),
    );

    proj_title.innerText = project.title;
    proj_title.setAttribute("contentEditable", "plaintext-only");
    proj_title.onkeydown = function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        proj_title.setAttribute("contentEditable", "false");
        project.title = proj_title.innerText;
        proj_title.setAttribute("contentEditable", "plaintext-only");
      }
    };

    proj_title.addEventListener("click", Clicks.proj_title_click);
    addTab.addEventListener("click", function () {
      Clicks.addTab_click(project);
    });
    closeProj.addEventListener("click", function () {
      Clicks.closeProj_click(project);
    });

    grid.append(proj);
    proj.append(proj_header, tab_container, closeProj_container);
    proj_header.append(addTab_container, proj_title);
    addTab_container.append(addTab);
    closeProj_container.append(closeProj);
  });
}

function pushTabs(project) {
  project.tabsArray.forEach((tab) => {
    //
  });

  // const tab_container = document.getElementById("tab_container");
  // const tab = document.createElement("div");

  // tab.classList.add(
  //   ..."h-9 w-11/12 rounded-br-lg rounded-tr-lg bg-white".split(" "),
  // );

  // tab_container.append(tab);
}

const Clicks = {
  addProj_click() {
    createProject();
    displayProjects();
  },
  proj_title_click() {
    this.innerText = "";
  },
  addTab_click(project) {
    project.createTab();
    console.log(projectsArray);
    displayTabs(project);
  },
  closeProj_click(project) {
    project.deleteProject();
    displayProjects();
  },
};

function displayProjects() {
  clearProjects();
  pushProjects();
}

function displayTabs(project) {
  // clearTabs? Maybe
  pushTabs(project);
}

function initializePage() {
  loadHeader();
  loadGrid();
}

export { initializePage };
