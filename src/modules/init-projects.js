import projectFactory from './projects-factory';

const initProjects = (projects, projectInputValue)=> {

   const project = projectFactory(projectInputValue);
   projects.push(project);
   projectInputValue = '';

};

export default initProjects;
