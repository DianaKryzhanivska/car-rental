import React, { useEffect } from 'react';
import { CloseBtn, ModalWindow, Overlay } from './Modal.styled';
import closeIcon from '../../img/close.svg';

const Modal = ({ children, close }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  const handleCloseBtnClick = () => {
    close();
  };
  return (
    <Overlay onClick={e => handleBackdropClick(e)}>
      <ModalWindow>
        {children}
        <CloseBtn type="button" onClick={handleCloseBtnClick}>
          <img src={closeIcon} alt="close" />
        </CloseBtn>
      </ModalWindow>
    </Overlay>
  );
};

export default Modal;
