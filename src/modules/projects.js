import projectFactory from './projects-factory';
import initProjects from './init-projects';
import renderProjects from './render-projects';

const projectsJs = function () {

  const projectForm = document.querySelector('.project-form');
  const projectFormInput = document.querySelector('.project-input');
  const projectList = document.querySelector('.projects-list');

  const projects = [];
  let selectedProject;

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = projectFormInput.value;
    initProjects(projects, inputValue);
    renderProjects(projects);
    projectFormInput.value = null;
  });

  projectList.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'li'){
      selectedProject = e.target.dataset.index;
      renderProjects(projects, selectedProject);
    };
  });

};

export default projectsJs;


