document.addEventListener("DOMContentLoaded", () => {
  // Controle do localStorage para contagem de avaliações concluídas
  let numAvaliacoes = Number(window.localStorage.getItem("numAvaliacoes-ls")) || 0;
  
  numAvaliacoes++;
  
  window.localStorage.setItem("numAvaliacoes-ls", numAvaliacoes);

  const contadorElemento = document.querySelector("#contadorAvaliacoes");
  if (contadorElemento) {
    contadorElemento.textContent = `${numAvaliacoes}`;
  }

  // Preenchimento do Rodapé
  const yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const lastModP = document.querySelector("#lastModified");
  if (lastModP) {
    lastModP.textContent = `Última Modificação: ${document.lastModified}`;
  }
});