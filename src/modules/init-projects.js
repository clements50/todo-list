import projectFactory from './projects';
import projectRender from './project-render';

const initProjects = (projects)=> {

   const projectForm = document.querySelector('.project-form');
   const projectsList = document.querySelector('.projects-list');
   const projectInput = document.querySelector('.project-input');

   projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const project = projectFactory(projectInput.value);
      projects.push(project);
      projectInput.value = '';
      projectRender(projects);
   })
};

export default initProjects;
