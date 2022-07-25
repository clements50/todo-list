import initProjects from './init-projects';
import renderProjects from './render-projects';
import initTodos from './init-todos';
import renderTodos from './render-todos';
import completeTask from './complete-task';


const projectsJs = function () {

  const projectForm = document.querySelector('.project-form');
  const projectFormInput = document.querySelector('.project-input');
  const projectList = document.querySelector('.projects-list');
  const modalForm = document.querySelector('.modal-form');
  const modalNameField = document.querySelector('#name-field');
  const modalDateField = document.querySelector('#date-field');
  const modalDescription = document.querySelector('#todo-description');
  const addTaskBtn = document.querySelector('.add-task');
  const modal = document.querySelector('.modal');

  let projects = [{name: 'All Todos', list: []}];
  let selectedProject = 0;

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = projectFormInput.value;
    initProjects(projects, inputValue);
    renderProjects(projects, selectedProject);
    projectFormInput.value = null;
  });

  projectList.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'li'){
      selectedProject = parseInt(e.target.dataset.index);
      renderProjects(projects, selectedProject);
      renderTodos(projects, selectedProject);
    };
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const modalNameValue = modalNameField.value;
    const modalDateValue = modalDateField.value;
    const modalDescValue = modalDescription.value;
    initTodos(projects, selectedProject, modalNameValue, modalDateValue, modalDescValue);
    modalNameField.value = null;
    modalDateField.value = null;
    modalDescription.value = null;
    modal.classList.remove('modal-show');
    modal.classList.add('modal-hide');
    addTaskBtn.classList.remove('add-task-active');

    renderTodos(projects, selectedProject);
    console.log(projects)
  });


  completeTask(projects, selectedProject);
  renderProjects(projects, selectedProject);
  renderTodos(projects, selectedProject);

};

export default projectsJs;


