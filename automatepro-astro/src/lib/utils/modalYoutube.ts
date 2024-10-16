export function initVideoModal(): void {
  const modal = document.querySelector(".modal") as HTMLElement;
  const modalOverlay = document.querySelector(".modal-overlay") as HTMLElement;
  const modalClose = document.querySelector(".modal-close") as HTMLElement;
  const videoButton = document.querySelector(".btn-primary") as HTMLElement;
  const youtubeIframe = document.querySelector("#youtube-iframe") as HTMLIFrameElement;

  function openModal(): void {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  }

  function closeModal(): void {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling
    // Stop video playback when closing the modal
    youtubeIframe.contentWindow?.postMessage('{"event":"command","func":"stopVideo","args":""}', "*");
  }

  videoButton.addEventListener("click", openModal);
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  // Use event delegation for modal trigger
  document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches("[data-modal-trigger]")) {
      openModal();
    }
  });
}
