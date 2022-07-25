import clearElement from './clear-element';

const renderProjects = (projects, selectedProject) => {
   const projectsListElement = document.querySelector('.projects-list');

   clearElement(projectsListElement);

   projects.forEach((project, i) => {
      const projectElement = document.createElement('li');
      projectElement.classList.add('project-element');
      projectElement.dataset.index = i;
      projectElement.textContent = project.name ;

     if(projectElement.dataset.index == selectedProject){
       projectElement.style.color = 'white';
     }

      projectsListElement.appendChild(projectElement);
   });

};

export default renderProjects; 
