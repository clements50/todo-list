import clearElement from "./clear-element";

const renderTodos = function(projects, selectedProject) {
  const taskContainer = document.querySelector('.task-container');
  const projectNameHeader = document.querySelector('.project-name-header')
  projectNameHeader.textContent = projects[selectedProject].name;

  clearElement(taskContainer);

  projects[selectedProject].list.forEach(todo => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    const taskName = document.createElement('h2');
    taskName.classList.add('task-name');
    taskName.textContent = todo.name;
    const taskDescription = document.createElement('div');
    taskDescription.classList.add('description');
    taskDescription.textContent = todo.description; 
    taskElement.appendChild(taskName);
    taskElement.appendChild(taskDescription);
    taskContainer.appendChild(taskElement);
  })
};

export default renderTodos;
