// Configuração Dinâmica do Rodapé
const currentYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

// Define o ano atual
const today = new Date();
currentYearElement.innerHTML = today.getFullYear();

// Define a data de última modificação do documento
lastModifiedElement.innerHTML = document.lastModified;

// Lógica do Menu Hambúrguer Responsivo
const menuBotao = document.getElementById('menu-btn');
const menuLista = document.getElementById('animacao-menu');

menuBotao.addEventListener('click', () => {
    // Alterna a classe escondido para exibir/ocultar os links
    menuLista.classList.toggle('escondido');
    
    // Alterna o símbolo do botão (X quando aberto, ☰ quando fechado)
    if (menuLista.classList.contains('escondido')) {
        menuBotao.innerHTML = '&#9776;'; // Símbolo de Hambúrguer
    } else {
        menuBotao.innerHTML = '&#10006;'; // Símbolo de X
    }
});