const domStuff = (() => {

const hamburger = document.querySelector('.hamburger');
const projectSection = document.querySelector('.projects')

hamburger.addEventListener('click', () => {
  projectSection.classList.toggle('active')
});

})();

export default domStuff;
 
