const domStuff = (() => {

const hamburger = document.querySelector('.hamburger');
const projectSection = document.querySelector('.projects');
const addTaskBtn = document.querySelector('.add-task');
const projectExit = document.querySelector('.exit-btn');
const modal = document.querySelector('.modal');
const modalExitBtn = document.querySelector('.modal-exit-btn');
const taskContainer = document.querySelector('.task-container');

hamburger.addEventListener('click', () => {
  projectSection.classList.add('active')
});

addTaskBtn.addEventListener('click', () => {
   addTaskBtn.classList.add('add-task-active');

  setTimeout(() => {
    modal.classList.remove('modal-hide');
    modal.classList.add('modal-show');
  }, 700);
});

  modal.addEventListener('click', (e) => {
    if(e.target.className === 'modal modal-show'){
      modal.classList.remove('modal-show');
      modal.classList.add('modal-hide');
      addTaskBtn.classList.remove('add-task-active');
    };
  });

  modalExitBtn.addEventListener('click', () => {
      modal.classList.remove('modal-show');
      modal.classList.add('modal-hide');
      addTaskBtn.classList.remove('add-task-active');
  });

projectExit.addEventListener('click', () => {
  projectSection.classList.remove('active');
});

taskContainer.addEventListener('click', (e) => {
  if(e.target.className === 'todo-checkbox'){
    if(e.target.checked === true){
      e.target.parentElement.classList.add('task-completed');
    }else {
      e.target.parentElement.classList.remove('task-completed')
    }
  }
})



})();

export default domStuff;

