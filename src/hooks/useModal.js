import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    document.body.classList.remove('overflow-hidden');
  };

  return { isOpen, modalContent, openModal, closeModal };
}
