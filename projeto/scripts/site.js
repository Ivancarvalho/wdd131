// Manipulação do Menu Responsivo e Dados do Rodapé
document.addEventListener("DOMContentLoaded", () => {
    // Menu Hambúrguer
    const menuBtn = document.querySelector("#menu-btn");
    const navMenu = document.querySelector("#nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            
            // Melhora a acessibilidade indicando o estado do menu para leitores de tela
            menuBtn.setAttribute("aria-expanded", isOpen);
            
            // Alterna o ícone entre o hambúrguer (☰) e o fechar (✕)
            menuBtn.textContent = isOpen ? "✕" : "☰";
        });
    }

    // Preenchimento Dinâmico do Rodapé
    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModP = document.querySelector("#lastModified");
    if (lastModP) {
        lastModP.textContent = `Última Modificação: ${document.lastModified}`;
    }
});