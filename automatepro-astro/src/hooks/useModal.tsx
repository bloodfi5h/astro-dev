import { useRef, useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    if (modalRef.current && overlayRef.current) {
      modalRef.current.style.display = "block";
      overlayRef.current.style.display = "block";
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    if (modalRef.current && overlayRef.current) {
      modalRef.current.style.display = "none";
      overlayRef.current.style.display = "none";
      setIsModalOpen(false);
    }
  };

  return {
    isModalOpen,
    modalRef,
    overlayRef,
    openModal,
    closeModal,
  };
};

export default useModal;
