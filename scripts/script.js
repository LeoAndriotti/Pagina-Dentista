document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalCardContent = document.getElementById("modal-card-content");
    const modalTitle = document.getElementById("modal-title");
    const modalDescricao = document.getElementById("modal-descricao");
    const modalValor = document.getElementById("modal-valor");
    const modalFormContent = document.getElementById("modal-form-content");
    const modalTitleForm = document.getElementById("modal-title-form");
    const servicoSelect = document.getElementById("servico-select");

    const closeBtns = document.querySelectorAll(".close");

    
    const servicosInfo = {
        "Prótese Dentária": {
            descricao: "Substituição de dentes perdidos com estrutura funcional e estética.",
            valor: "R$ 1.200,00"    
        },
        "Limpeza e Clareamento": {
            descricao: "Higienização profunda e clareamento para um sorriso mais branco.",
            valor: "R$ 400,00"
        },
        "Instalação de Aparelhos": {
            descricao: "Colocação de aparelhos ortodônticos para alinhamento dentário.",
            valor: "R$ 2.000,00"
        },
        "Tratamento de Canal": {
            descricao: "Remoção da polpa dentária infeccionada, aliviando a dor.",
            valor: "R$ 800,00"
        },
        "Obturação": {
            descricao: "Fechamento de cavidades causadas por cáries com material restaurador.",
            valor: "R$ 300,00"
        }
    };

    
    document.querySelectorAll(".trabalhos").forEach(card => {
        card.addEventListener("click", () => {
            const titulo = card.querySelector("h2").textContent;

            modalTitle.textContent = titulo;
            modalDescricao.textContent = servicosInfo[titulo]?.descricao || "Descrição indisponível.";
            modalValor.textContent = "Valor aproximado: " + (servicosInfo[titulo]?.valor || "Consulte-nos");

            modalCardContent.style.display = "block";
            modalFormContent.style.display = "none";
            modal.style.display = "flex";
        });
    });

    
    document.querySelector('.nav-links a[href="#"]').addEventListener("click", function (e) {
        e.preventDefault();

        modalTitleForm.textContent = "Solicite seu atendimento";
        servicoSelect.selectedIndex = 0;

        modalCardContent.style.display = "none";
        modalFormContent.style.display = "block";
        modal.style.display = "flex";
    });

    
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    
    const cards = document.querySelector('.cards');
    const cardWidth = 320 + 32;
    let currentPosition = 0;
    let animationId;
    const speed = 0.9;
    const totalCards = 6;

    const originalCards = cards.innerHTML;
    cards.innerHTML = originalCards + originalCards + originalCards;

    function animate() {
        currentPosition -= speed;

        if (currentPosition <= -cardWidth * totalCards) {
            currentPosition = 0;
        }

        cards.style.transform = `translateX(${currentPosition}px)`;
        animationId = requestAnimationFrame(animate);
    }

    animate();

    cards.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
    });

    cards.addEventListener('mouseleave', () => {
        animate();
    });
});
