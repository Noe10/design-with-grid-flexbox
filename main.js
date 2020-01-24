console.log('holaaaa');

const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', ()=>{
    contenedor.classList.toggle('active');
    console.log('no se pudo')
})