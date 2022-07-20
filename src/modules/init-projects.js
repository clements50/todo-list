import projectFactory from './projects-factory';

const initProjects = (projects)=> {

   const projectsList = document.querySelector('.projects-list');
   const projectForm = document.querySelector('.project-form');
   const projectInput = document.querySelector('.project-input');

   projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const project = projectFactory(projectInput.value);
      projects.push(project);
      projectInput.value = '';
   })
};

export default initProjects;
