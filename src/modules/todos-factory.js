const TodoFactory = function(name, date, description){
  return { name, date, description, completed: false };
};

export default TodoFactory;
