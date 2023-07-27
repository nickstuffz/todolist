import { createProject, projectsArray } from "./oldprojects.js";
import add_svg from "./add.svg";

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
    ..."text-white border-white border-dotted border-l-4 border-t-4 border-r-4 p-2 ml-4".split(
      " ",
    ),
  );
  logo_box.classList.add(..."w-72 bg-white".split(" "));
  logo.classList.add(..."text-center text-3xl font-bold pt-1.5".split(" "));

  addProj.innerText = "add project";
  logo.innerText = "Simple. Tasks";

  addProj.addEventListener("click", Clicks.addProjClick);

  content.append(header);
  header.append(addProj, logo_box);
  logo_box.append(logo);
}

function loadGrid() {
  grid.classList.add(..."grid grid-cols-auto gap-4 p-6".split(" "));
  grid.id = "grid";

  content.append(grid);
}

function pushProject(newProject) {
  const proj = document.createElement("div");
  const proj_header = document.createElement("div");
  const proj_title = document.createElement("div");
  const tab_container = document.createElement("div");
  const addTab_container = document.createElement("div");
  const addTab = new Image();
  addTab.src = add_svg;

  tab_container.id = "tab_container";

  proj.classList.add(
    ..."w-full h-96 border-4 border-white flex flex-col gap-3".split(" "),
  );
  proj_header.classList.add(..."flex justify-between".split(" "));
  proj_title.classList.add(
    ..."w-3/4 h-12 border-l-4 border-b-4 border-dotted border-white text-center text-white font-bold text-2xl pt-1.5".split(
      " ",
    ),
  );
  tab_container.classList.add(..."flex flex-col gap-2".split(" "));
  addTab.classList.add(
    ..."border-dotted border-white border-l-2 border-b-2 border-r-2 p-1 ml-4".split(
      " ",
    ),
  );

  proj_title.innerText = newProject.title;

  grid.append(proj);
  proj.append(proj_header, tab_container);
  proj_header.append(addTab_container, proj_title);
  addTab_container.append(addTab);

  proj_title.addEventListener("click", Clicks.proj_titleClick);
  addTab.addEventListener("click", newProject.createTab);
}

function pushTab() {
  const tab = document.createElement("div");
  const tab_container = document.getElementById("tab_container");

  tab.classList.add(
    ..."h-9 w-11/12 rounded-br-lg rounded-tr-lg bg-white".split(" "),
  );

  tab_container.append(tab);

  return;
}

const Clicks = {
  addProjClick() {
    pushProject(createProject());
  },

  proj_titleClick() {},

  addTabClick() {
    // projectsArray[index].createTab();
    // pushTab();
  },

  tabClick() {},
};

function initializePage() {
  loadHeader();
  loadGrid();
  Clicks.addProjClick();
}

export { initializePage };
