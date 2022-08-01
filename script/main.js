const navButton = document.querySelector('.nav--toggle');
const nav = document.querySelector('.nav');
navButton.addEventListener('click',function(){
    nav.classList.toggle('nav--hidden');
})