import TodoFactory from './todos-factory';

const initTodos = function(projects, selectedProject, todoName, todoDueDate, todoDesc) {
    const newTodo = TodoFactory(todoName, todoDueDate, todoDesc);
    projects[selectedProject].list.push(newTodo);
    if(selectedProject === null || selectedProject === ''){
      projects[0].list.push(newTodo); 
    }else {
      projects[selectedProject].list.push(newTodo);
      projects[0].list.push(newTodo); 
    }
  };

export default initTodos;
