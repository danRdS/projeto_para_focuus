const menuLateral = document.querySelector('aside');
const telaEscuraMenu = document.querySelector('.tela-escura-menu');

const abrirMenu = () => {
    menuLateral.classList.add('menu-lateral-aberto');
    telaEscuraMenu.classList.add('tela-escura-menu-visivel');
}

telaEscuraMenu.addEventListener('click', () => {
    telaEscuraMenu.classList.remove('tela-escura-menu-visivel');
    menuLateral.classList.remove('menu-lateral-aberto');
})