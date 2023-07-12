import {createProject} from './projects.js'

function initializePage() {
    loadHeader();
    loadGrid();
    createProject();

    return;
}

function loadHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const addProj = document.createElement('div');
    const logo_box = document.createElement('div');
    const logo = document.createElement('div');

    header.classList.add(..."flex justify-between border-b-4 border-white pt-4".split(' '));
    addProj.classList.add(..."text-white border-dotted border-l-4 border-t-4 border-r-4 p-2 ml-4".split(' '));
    logo_box.classList.add(..."w-72 bg-white rounded-t1-sm rounded-b1-sm".split(' '));
    logo.classList.add(..."text-center text-3xl font-bold".split(' '));

    addProj.innerText = 'add project'
    logo.innerText = 'Simple. Tasks';

    addProj.addEventListener('click', createProject);
    
    content.append(header);
    header.append(addProj, logo_box);
    logo_box.append(logo);

    return;
}

function loadGrid() {
    const content = document.getElementById('content');
    const grid = document.createElement('div');
    
    grid.classList.add(..."grid grid-cols-auto gap-4 p-6".split(' '));
    grid.id = 'grid';

    content.append(grid);

    return;
}



export {initializePage}