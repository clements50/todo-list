import initProjects from './init-projects';
import renderProjects from './render-projects';

const onProjectSubmit = function( projects ) {
   const projectForm = document.querySelector('.project-form');
   const projectsList = document.querySelector('.projects-list');
   const projectInput = document.querySelector('.project-input');

   projectForm.addEventListener('submit', (e) => {

      e.preventDefault();
      initProjects(projects, projectInput.value);
      renderProjects(projects);

   });
};

export default onProjectSubmit;
