const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const container = document.querySelector('.container');

openBtn.addEventListener('click' ,function (){
    container.classList.add('show-nav')
})
closeBtn.addEventListener('click' ,function (){
    container.classList.remove('show-nav')
})