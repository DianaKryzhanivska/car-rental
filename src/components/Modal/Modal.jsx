import React, { useEffect } from 'react';
import { CloseBtn, ModalWindow, Overlay } from './Modal.styled';
import sprite from '../../img/sprite.svg';

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
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </CloseBtn>
      </ModalWindow>
    </Overlay>
  );
};

export default Modal;
