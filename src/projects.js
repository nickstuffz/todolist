import add_svg from './add.svg';

function newProject() {
    const grid = document.getElementById('grid');
    const proj = document.createElement('div');
    const proj_header = document.createElement('div');
    const tab_container = document.createElement('div');
    const addTab_container = document.createElement('div');
    const proj_title = document.createElement('div');
    const addTab = new Image();
    addTab.src = add_svg;

    proj.classList.add(..."w-full h-96 border-4 border-white flex flex-col gap-3".split(' '));
    proj_header.classList.add(..."flex justify-end".split(' '));
    tab_container.classList.add(..."flex flex-col gap-2".split(' '));
    proj_title.classList.add(..."w-3/4 h-12 border-l-4 border-b-4 border-dotted border-white rounded-br-md".split(' '));
    addTab.classList.add(..."border-dotted border-2 p-1 ml-3".split(' '));

    grid.append(proj);
    proj.append(proj_header, tab_container, addTab_container);
    proj_header.append(proj_title);
    addTab_container.append(addTab);

    addTab.addEventListener('click', Clicks.addTabClick);
    
    return;
}

const Clicks = {
    addTabClick() {
        // come back to this, need to somehow store projects in array first
        // so that they can be referenced.
    }
};

export {newProject}