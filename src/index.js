import './style.css';
import Icon from './add.svg';

const addIcon = new Image();
addIcon.src = Icon;
addIcon.classList.add('border-dotted', 'border-2', 'p-1', 'ml-3');
const addTab = document.getElementById('addTab');
addTab.append(addIcon);
