import projectFactory from './projects-factory';

const initProjects = (projects, inputValue)=> {
  const projectFormInput = document.querySelector('.project-form')
   const project = projectFactory(inputValue);
   projects.push(project);
};

export default initProjects;
