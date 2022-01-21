/* Elementos */
const body = document.querySelector('body');
const principal_screen = document.querySelector('.pantalla-principal');
const start_btn = principal_screen.querySelector('.start-btn');
const info_box = document.querySelector('.info-box');
const quit_btn = info_box.querySelector('.botones .cancel-btn');
const continue_btn = info_box.querySelector('.botones .start-btn');

/* Al apretar el Start Btn */
start_btn.onclick = () =>{
    info_box.classList.remove('desactivado');
    principal_screen.classList.add('desactivado');
    body.style.background = '#DCC1B6';
}