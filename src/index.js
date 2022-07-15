// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import refresh from './refresh.png';
import tasks from './modules/tasks.js';
import showTasks from './modules/showTasks.js';

const count = 0;
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
