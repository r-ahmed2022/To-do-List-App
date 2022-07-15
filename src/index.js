// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import refresh from './refresh.png';
import tasks from './modules/tasks.js';

let count = 0;

const showTasks = (task) => {
  count += 1;
  const list = document.getElementById('to-do-list');
  const li = document.createElement('li');
  li.setAttribute('class', 'list-item');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  li.append(checkbox);
  li.innerHTML += `<span class=task-info>${task.index}</span>&nbsp; &nbsp;&nbsp;&nbsp;`;
  li.innerHTML += `<span class=task-info>${task.description}</span>&nbsp;&nbsp;&nbsp;&nbsp;`;
  li.innerHTML += `<span class=task-info-completed>${task.completed.toString().toUpperCase()}</span>`;
  li.innerHTML += '<div class="three-dots">&#10247;</div>';
  list.append(li);
};

setInterval(() => {
  const countmsg = document.getElementById('msgs');
  countmsg.innerHTML = `${count}&nbsp;tasks`;
}, 1000);

const element = document.getElementById('msg-logo');
const icon = new Image();
icon.src = refresh;
element.appendChild(icon);

document.addEventListener('DOMContentLoaded', () => {
  const sortArr = tasks.sort((a, b) => parseInt(a.index, 10) - parseInt(b.index, 10));
  sortArr.forEach((task) => showTasks(task));
});
