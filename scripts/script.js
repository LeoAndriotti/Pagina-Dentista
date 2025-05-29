document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const modalTitle = document.getElementById("modal-title");
    const servicoInput = document.getElementById("servico");

    document.querySelectorAll(".trabalhos").forEach(card => {
        card.addEventListener("click", () => {
            const titulo = card.querySelector("h2").textContent;

            modalTitle.textContent = `Solicitar: ${titulo}`;
            servicoInput.value = titulo;

            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
