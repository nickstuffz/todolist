import {createProject} from './projects.js'
import add_svg from './add.svg';


const content = document.getElementById('content');
const header = document.createElement('div');
const addProj = document.createElement('div');
const logo_box = document.createElement('div');
const logo = document.createElement('div');
const grid = document.createElement('div');
const proj = document.createElement('div');
const proj_header = document.createElement('div');
const proj_title = document.createElement('div');
const tab_container = document.createElement('div');
const addTab_container = document.createElement('div');

function loadHeader() {
    header.classList.add(..."flex justify-between border-b-4 border-white pt-4".split(' '));
    addProj.classList.add(..."text-white border-dotted border-l-4 border-t-4 border-r-4 p-2 ml-4".split(' '));
    logo_box.classList.add(..."w-72 bg-white rounded-t1-sm rounded-b1-sm".split(' '));
    logo.classList.add(..."text-center text-3xl font-bold".split(' '));

    addProj.innerText = 'add project'
    logo.innerText = 'Simple. Tasks';

    addProj.addEventListener('click', Clicks.addProjClick);
    
    content.append(header);
    header.append(addProj, logo_box);
    logo_box.append(logo);

    return;
}

function loadGrid() {
    grid.classList.add(..."grid grid-cols-auto gap-4 p-6".split(' '));
    grid.id = 'grid';

    content.append(grid);

    return;
}

function pushProject() {

    const addTab = new Image();
    addTab.src = add_svg;

    proj.classList.add(..."w-full h-96 border-4 border-white flex flex-col gap-3".split(' '));
    proj_header.classList.add(..."flex justify-between".split(' '));
    proj_title.classList.add(..."w-3/4 h-12 border-l-4 border-b-4 border-dotted border-white rounded-br-md".split(' '));
    tab_container.classList.add(..."flex flex-col gap-2".split(' '));
    addTab.classList.add(..."border-dotted border-l-2 border-b-2 border-r-2 p-1 ml-4".split(' '));

    grid.append(proj);
    proj.append(proj_header, tab_container);
    proj_header.append(addTab_container, proj_title);
    addTab_container.append(addTab);

    proj_title.addEventListener('click', Clicks.proj_titleClick);
    addTab.addEventListener('click', Clicks.addTabClick);
    
    return;

    // reorder to just chrono instead of child level
}


const Clicks = {
    addProjClick() {
        createProject();
        pushProject();
        return;
    },

    proj_titleClick() {

    },

    addTabClick() {
        createTab();
        return;
    },

    tabClick() {

    },
};

function initializePage() {
    loadHeader();
    loadGrid();

    return;
}

export {initializePage}