import TodoFactory from './todos-factory';

const initTodos = function(projects, selectedProject, todoName, todoDueDate, todoDesc) {
    const newTodo = TodoFactory(todoName, todoDueDate, todoDesc);

    if(selectedProject === 0){
      projects[0].list.push(newTodo); 
    }else if(selectedProject != 0) {
      projects[selectedProject].list.push(newTodo);
      projects[0].list.push(newTodo); 
    }
  };

export default initTodos;
