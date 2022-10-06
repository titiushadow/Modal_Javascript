const abrirModalButton = document.querySelector("#abrir-modal");
const fecharModalButton = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

[abrirModalButton, fecharModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});