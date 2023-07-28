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
    ..."ml-6 border-l-4 border-r-4 border-t-4 border-dotted border-white p-2 text-sm text-white".split(
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
  grid.replaceChildren();
}

function clearTabs(tab_container) {
  tab_container.replaceChildren();
}

function pushProjects() {
  projectsArray.forEach((project) => {
    const proj = document.createElement("div");
    const proj_header = document.createElement("div");
    const addTab_container = document.createElement("div");
    const addTab = new Image();
    addTab.src = add_svg;
    const proj_title = document.createElement("div");
    const tab_container = document.createElement("div");
    const closeProj_container = document.createElement("div");
    const closeProj = new Image();
    closeProj.src = close_svg;

    proj.classList.add(
      ..."relative flex h-max w-full flex-col gap-3 border-4 border-white".split(
        " ",
      ),
    );
    proj_header.classList.add(..."flex justify-between".split(" "));
    addTab.classList.add(
      ..."ml-4 rounded-b-md border-b-2 border-l-2 border-r-2 border-dotted border-white p-0.5".split(
        " ",
      ),
    );
    proj_title.classList.add(
      ..."h-12 w-3/4 border-b-4 border-l-4 border-dotted border-white pt-1.5 text-center text-2xl font-bold text-white".split(
        " ",
      ),
    );
    tab_container.classList.add(
      ..."tab_container flex flex-col gap-2".split(" "),
    );
    closeProj_container.classList.add(..."flex justify-end".split(" "));
    closeProj.classList.add(
      ..."border-l-2 border-t-2 border-dotted border-white p-2".split(" "),
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
      Clicks.addTab_click(project, tab_container);
    });
    closeProj.addEventListener("click", function () {
      Clicks.closeProj_click(project);
    });

    grid.append(proj);
    proj.append(proj_header, tab_container, closeProj_container);
    proj_header.append(addTab_container, proj_title);
    addTab_container.append(addTab);
    closeProj_container.append(closeProj);

    pushTabs(project, tab_container);
  });
}

function pushTabs(project, tab_container) {
  project.tabsArray.forEach((txb) => {
    const tab_group = document.createElement("div");
    const tab = document.createElement("div");
    const closeTab = new Image();
    closeTab.src = close_svg;

    tab_group.classList.add(..."flex w-11/12 items-center".split(" "));
    tab.classList.add(
      ..."h-12 grow rounded-r-lg border-y-2 border-r-2 border-solid border-white pt-2 text-white".split(
        " ",
      ),
    );
    closeTab.classList.add(
      ..."rounded-r-md border-y-2 border-r-2 border-dotted border-white p-1".split(
        " ",
      ),
    );

    tab.innerText = txb.title;

    closeTab.addEventListener("click", function () {
      Clicks.closeTab_click(project, tab_container, txb);
    });

    tab_container.append(tab_group);
    tab_group.append(tab, closeTab);
  });
}

const Clicks = {
  addProj_click() {
    createProject();
    displayProjects();
  },
  proj_title_click() {
    this.innerText = "";
  },
  addTab_click(project, tab_container) {
    project.createTab();
    displayTabs(project, tab_container);
  },
  closeProj_click(project) {
    project.deleteProject();
    displayProjects();
  },
  closeTab_click(project, tab_container, txb) {
    txb.deleteTab(project);
    displayTabs(project, tab_container);
  },
};

function displayProjects() {
  clearProjects();
  pushProjects();
}

function displayTabs(project, tab_container) {
  clearTabs(tab_container);
  pushTabs(project, tab_container);
}

function initializePage() {
  loadHeader();
  loadGrid();
}

export { initializePage };
