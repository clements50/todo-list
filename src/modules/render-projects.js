import clearElement from './clear-element';
import setActiveProject from './active-project';

const renderProjects = (projects) => {
   
   const projectsListElement = document.querySelector('.projects-list');

   clearElement(projectsListElement);

   projects.forEach((project, i) => {
      const projectElement = document.createElement('li');
      projectElement.classList.add('project-element');
      projectElement.dataset.index = i;
      projectElement.innerHTML = `${project.name} <i class='fa-solid fa-trash-can'></i>`;
      projectsListElement.appendChild(projectElement);
      projectElement.addEventListener('click', setActiveProject);
   });

};

export default renderProjects; 
