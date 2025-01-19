/* menu */
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('activo')
    menu.classList.toggle('mostrar-menu')
})