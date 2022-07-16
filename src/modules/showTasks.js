// eslint-disable-next-line import/no-mutable-exports
// &#10247;
const showTasks = (task) => {
  const storedList = JSON.parse(localStorage.getItem('tasks'));
  const list = document.getElementById('to-do-list');
  for (let i = 0; i < storedList.length; i += 1) {
    task.tasklist.push(
      {
        index: storedList[i].index,
        description: storedList[i].description,
        completed: storedList[i].completed,
      },
    );
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item');
    li.innerHTML += '<input type="checkbox" name="completed" id="ompleted">';
    li.innerHTML += `<div class="info"><span  class="task.info">${task.tasklist[i].description}</span>`;
    li.innerHTML += `<span class="task-info">${task.tasklist[i].completed}</span></div>`;
    li.innerHTML += `<div class="info"><button type="button" onclick='deleteTask(${i})' id="three-dots" class="delete">&#9249;</button>`;
    li.innerHTML += `<button type="button" onclick="editTask(${i}, '${task.tasklist[i].description}')" class="edit">Edit</button></div>`;
    list.append(li);
  }
};

export default showTasks;