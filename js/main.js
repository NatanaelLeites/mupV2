/* menu */
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')
const menuLinks = document.querySelectorAll('.menu-item a');
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('activo')
    menu.classList.toggle('mostrar-menu')
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('activo'); // Elimina la clase 'activo' del botón
      menu.classList.remove('mostrar-menu'); // Elimina la clase 'mostrar-menu' del menú
    });
  });