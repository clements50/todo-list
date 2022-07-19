import projectFactory from './projects';

const initProjects = (projects)=> {

   const projectForm = document.querySelector('.project-form');
   const projectsList = document.querySelector('.projects-list');
   const projectInput = document.querySelector('.project-input');

   projectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const project = projectFactory(projectInput.value);
      projects.push(project);
      console.log(projects);
   })
};

export default initProjects;
