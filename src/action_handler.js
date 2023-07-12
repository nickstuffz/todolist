import {newProject} from './projects.js'

function initializePage() {
    loadHeader();
    loadGrid();
    newProject();

    return;
}

function loadHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const logo_box = document.createElement('div');
    const logo = document.createElement('div');

    header.classList.add(..."flex justify-end border-b-4 border-white pt-4".split(' '));
    logo_box.classList.add(..."w-72 bg-white rounded-t1-sm rounded-b1-sm".split(' '));
    logo.classList.add(..."text-center text-3xl font-bold".split(' '));

    logo.innerText = 'Simple. Tasks';
    
    content.append(header);
    header.append(logo_box);
    logo_box.append(logo);

    return;
}

function loadGrid() {
    const content = document.getElementById('content');
    const grid = document.createElement('div');
    
    grid.classList.add('grid', 'grid-cols-auto', 'gap-4', 'p-6');
    grid.id = 'grid';

    content.append(grid);

    return;
}


export {initializePage}