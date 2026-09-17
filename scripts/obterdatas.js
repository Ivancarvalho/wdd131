// Preenche o ano atual no rodapé
const anoAtualSpan = document.querySelector("#anoatual");
const anoAtual = new Date().getFullYear();
anoAtualSpan.textContent = anoAtual;

// Preenche a data da última modificação do documento no rodapé
const ultimaModificacaoP = document.querySelector("#ultimaModificacao");
ultimaModificacaoP.textContent = `Última Modificação: ${document.lastModified}`;