// eslint-disable-next-line import/no-mutable-exports
const showTasks = (task) => {
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

export default showTasks;