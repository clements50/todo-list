import initProjects from './init-projects';
import renderProjects from './render-projects';
import TodoFactory from './todos-factory';
import initTodos from './init-todos';


const projectsJs = function () {

  const projectForm = document.querySelector('.project-form');
  const projectFormInput = document.querySelector('.project-input');
  const projectList = document.querySelector('.projects-list');
  const modalForm = document.querySelector('.modal-form');
  const modalNameField = document.querySelector('#name-field');
  const modalDateField = document.querySelector('#date-field');
  const modalDescription = document.querySelector('#todo-description');

  let projects = [{name: 'All Todos', list: []}];
  let selectedProject;

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
    };
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const modalNameValue = modalNameField.value;
    const modalDateValue = modalDateField.value;
    const modalDescValue = modalDescription.value;
    initTodos(projects, selectedProject, modalNameValue, modalDateValue, modalDescValue);
    console.log(projects)
  });


  renderProjects(projects, selectedProject);

};

export default projectsJs;


