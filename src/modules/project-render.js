import clearElement from './clear-element';
import setActiveProject from './active-project';

const projectRender = (projects) => {
   
   const projectsListElement = document.querySelector('.projects-list');
   const projectForm = document.querySelector('.project-form'); 

   projectForm.addEventListener('submit', () => {
      clearElement(projectsListElement);

      projects.forEach((project, i) => {
         const projectElement = document.createElement('li');
         projectElement.classList.add('project-element');
         projectElement.dataset.index = i;
         projectElement.innerHTML = `${project.name} <i class='fa-solid fa-trash-can'></i>`;
         projectsListElement.appendChild(projectElement);
         projectElement.addEventListener('click', setActiveProject);
      });
   });
}

export default projectRender; 
