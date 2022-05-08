(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    window: document.querySelector("[data-window]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    console.log("work")
    refs.modal.classList.toggle("is-hidden");
    refs.window.classList.toggle("is-hidden_modal");
  }
})();