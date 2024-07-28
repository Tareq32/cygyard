const bar = document.getElementById('bar');
const toggleBurgerBtn = document.getElementById('burger');
const xMark = document.getElementById('x-mark');
const menu = document.getElementById('menu');

toggleBurgerBtn.addEventListener('click', toggleClasShow);

function toggleClasShow() {
    bar.classList.toggle('show');
    xMark.classList.toggle('show');
    menu.classList.toggle('show');

}

