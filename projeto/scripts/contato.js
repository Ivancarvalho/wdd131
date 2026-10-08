// Processamento do Formulário e Persistência no localStorage
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");
    const feedbackMessage = document.querySelector("#feedback-message");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o recarregamento automático

            // Captura de valores dos elementos do DOM
            const nome = document.querySelector("#nome").value;
            const email = document.querySelector("#email").value;
            const trilha = document.querySelector("#trilhaInteresse").value;

            // Criação do Objeto de Inscrição
            const inscricao = {
                nome: nome,
                email: email,
                trilha: trilha,
                dataEnvio: new Date().toISOString()
            };

            // Armazena a última inscrição no localStorage
            localStorage.setItem("ultimaInscricao", JSON.stringify(inscricao));

            // Exibe mensagem dinâmica de sucesso usando Template Literals
            if (feedbackMessage) {
                feedbackMessage.innerHTML = `
                    <h3>Inscrição Recebida com Sucesso!</h3>
                    <p>Obrigado, <strong>${nome}</strong>. Confirmamos seu interesse na trilha <em>${trilha}</em>.</p>
                    <p>Enviamos os detalhes para o e-mail: <strong>${email}</strong>.</p>
                `;
                feedbackMessage.classList.remove("hidden");
            }

            // Reseta o formulário
            contactForm.reset();
        });
    }
});