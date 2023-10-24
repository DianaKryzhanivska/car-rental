import { useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => {
    setIsOpen(prev => !prev);
  };
  const open = content => {
    setIsOpen(true);
    if (content !== null) {
      setData(content);
    }
  };
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return { isOpen, data, close, toggle, open };
};

export default useModal;
