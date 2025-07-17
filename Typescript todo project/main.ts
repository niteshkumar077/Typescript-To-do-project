let tasks: string[] = [];

const taskInput = document.getElementById('todo-input') as HTMLInputElement;
const addButton = document.getElementById('add-button') as HTMLButtonElement;
const taskList = document.getElementById('todo-list') as HTMLUListElement;
const deleteAllButton = document.getElementById('delete-all-button') as HTMLButtonElement;

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((taskText, index) => {
    const listItem = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;
    
    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
      editTask(index);
    };

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      deleteTask(index);
    };

    listItem.appendChild(textSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
  });
}

function addTask() {
  const newTaskText = taskInput.value.trim();

  if (newTaskText !== "") {
    tasks.push(newTaskText);
    taskInput.value = '';
    renderTasks();
  }
}

function deleteTask(index: number) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index: number) {
  const currentText = tasks[index];
  const newText = prompt("Edit your task:", currentText);

  if (newText !== null && newText.trim() !== '') {
    tasks[index] = newText.trim();
    renderTasks();
  }
}

function deleteAllTasks() {
  tasks = [];
  renderTasks();
}

addButton.addEventListener('click', addTask);
deleteAllButton.addEventListener('click', deleteAllTasks);

renderTasks();