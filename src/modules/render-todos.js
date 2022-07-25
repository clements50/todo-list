import clearElement from "./clear-element";

const renderTodos = function(projects, selectedProject) {
  const taskContainer = document.querySelector('.task-container');
  const projectNameHeader = document.querySelector('.project-name-header')
  projectNameHeader.textContent = projects[selectedProject].name;

  clearElement(taskContainer);

  projects[selectedProject].list.forEach((todo, i) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.dataset.index = i;
    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoCheckbox.classList.add('todo-checkbox');
    const taskName = document.createElement('p');
    taskName.classList.add('task-name');
    taskName.textContent = todo.name;
    taskElement.appendChild(todoCheckbox);
    taskElement.appendChild(taskName);
    taskContainer.appendChild(taskElement);
  })
};

export default renderTodos;
