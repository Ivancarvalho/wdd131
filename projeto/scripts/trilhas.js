// Array de Objetos com Dados das Trilhas
const trilhas = [
    {
        id: "trilha-1",
        nome: "Trilha da Serra Azul",
        dificuldade: "moderada",
        extensaoKm: 6.5,
        duracaoHoras: 3,
        imagem: "imagens/serra-azul.webp",
        descricao: "Caminhada com aclive moderado, belas formações rochosas e vista panorâmica da serra."
    },
    {
        id: "trilha-2",
        nome: "Vale Verde & Cachoeiras",
        dificuldade: "facil",
        extensaoKm: 3.2,
        duracaoHoras: 1.5,
        imagem: "imagens/vale-verde.webp",
        descricao: "Trilha plana à beira do rio com paradas estratégicas para banho de cachoeira."
    },
    {
        id: "trilha-3",
        nome: "Pico das Agulhas",
        dificuldade: "dificil",
        extensaoKm: 11.0,
        duracaoHoras: 6,
        imagem: "imagens/pico-agulhas.webp",
        descricao: "Travessia técnica exigente com trechos de escalada em rocha e vistas espetaculares."
    },
    {
        id: "trilha-4",
        nome: "Bosque Silencioso",
        dificuldade: "facil",
        extensaoKm: 2.5,
        duracaoHoras: 1,
        imagem: "imagens/bosque.webp",
        descricao: "Passeio relaxante dentro de uma floresta densa e sombreada, ideal para famílias."
    }
];

// Funções de Renderização e Filtro
document.addEventListener("DOMContentLoaded", () => {
    const trailsContainer = document.querySelector("#trails-container");
    const filterSelect = document.querySelector("#difficulty-filter");
    const favCountSpan = document.querySelector("#fav-count");

    // Recupera favoritos do localStorage
    let favoritos = JSON.parse(localStorage.getItem("trilhasFavoritas")) || [];

    // Função para atualizar o contador de favoritos
    function atualizarContador() {
        if (favCountSpan) {
            favCountSpan.textContent = `${favoritos.length}`;
        }
    }

    // Função para alternar favorito (adicionar/remover)
    window.alternarFavorito = function(idTrilha) {
        if (favoritos.includes(idTrilha)) {
            favoritos = favoritos.filter(id => id !== idTrilha);
        } else {
            favoritos.push(idTrilha);
        }
        localStorage.setItem("trilhasFavoritas", JSON.stringify(favoritos));
        atualizarContador();
        renderizarTrilhas(obterTrilhasFiltradas(filterSelect.value));
    };

    // Função para obter trilhas filtradas
    function obterTrilhasFiltradas(nivel) {
        if (nivel === "todas") {
            return trilhas;
        }
        return trilhas.filter(trilha => trilha.dificuldade === nivel);
    }

    // Função para renderizar cartões usando exclusivamente Template Literals
    function renderizarTrilhas(lista) {
        if (!trailsContainer) return;

        if (lista.length === 0) {
            trailsContainer.innerHTML = `<p>Nenhuma trilha encontrada para essa categoria.</p>`;
            return;
        }

        trailsContainer.innerHTML = lista.map(trilha => {
            const isFav = favoritos.includes(trilha.id);
            const classBadge = `badge-${trilha.dificuldade}`;
            const textoBotao = isFav ? "♥ Salva nos Favoritos" : "♡ Favoritar Trilha";

            return `
                <article class="trail-card">
                    <img src="${trilha.imagem}" alt="${trilha.nome}" width="600" height="400" loading="lazy">
                    <div class="trail-content">
                        <h3>${trilha.nome}</h3>
                        <p><strong>Dificuldade:</strong> <span class="${classBadge}">${trilha.dificuldade.toUpperCase()}</span></p>
                        <p><strong>Extensão:</strong> ${trilha.extensaoKm} km | <strong>Duração:</strong> ~${trilha.duracaoHoras}h</p>
                        <p>${trilha.descricao}</p>
                        <button class="btn-fav ${isFav ? 'active' : ''}" onclick="alternarFavorito('${trilha.id}')">
                            ${textoBotao}
                        </button>
                    </div>
                </article>
            `;
        }).join("");
    }

    // Escutador de Evento para o Filtro
    if (filterSelect) {
        filterSelect.addEventListener("change", (e) => {
            const nivelSelecionado = e.target.value;
            const listaFiltrada = obterTrilhasFiltradas(nivelSelecionado);
            renderizarTrilhas(listaFiltrada);
        });
    }

    // Inicialização
    atualizarContador();
    renderizarTrilhas(trilhas);
});