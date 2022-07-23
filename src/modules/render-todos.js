import clearElement from "./clear-element";

const renderTodos = function(projects, selectedProject) {

  const todoSection = document.querySelector('.todo-section');
  const taskHeader = document.createElement('div');
  taskHeader.classList.add('task-header')
  const projectNameHeader = document.createElement('h1');
  projectNameHeader.classList.add('project-name-header');
  projectNameHeader.textContent = projects[selectedProject].name;
  taskHeader.appendChild(projectNameHeader);

  clearElement(todoSection);
  
  todoSection.appendChild(taskHeader);

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
    todoSection.appendChild(taskElement);
  })
};

export default renderTodos;
