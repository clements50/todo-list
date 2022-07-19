const domStuff = (() => {

const hamburger = document.querySelector('.hamburger');
const projectSection = document.querySelector('.projects');
const addTaskBtn = document.querySelector('.add-task');
const projectExit = document.querySelector('.exit-btn')

hamburger.addEventListener('click', () => {
  projectSection.classList.add('active')
});

addTaskBtn.addEventListener('click', () => {
   addTaskBtn.classList.toggle('add-task-active');
})

projectExit.addEventListener('click', () => {
  projectSection.classList.remove('active');
})

})();

export default domStuff;

