import clearElement from './clear-element'

const projectRender = (projects) => {
   const projectsListElement = document.querySelector('.projects-list')
   clearElement(projectsListElement);

   projects.forEach((project, i) => {
      const projectElement = document.createElement('li');
      projectElement.dataset.index = i;
      projectElement.innerHTML = `${project.name} <i class='fa-solid fa-trash-can'></i>`;
      projectsListElement.appendChild(projectElement);
   });
}

export default projectRender; 
