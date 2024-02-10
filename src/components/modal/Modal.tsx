import React, { forwardRef, useImperativeHandle } from "react";

import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
}

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const Modal: React.ForwardRefRenderFunction<ModalHandle, ModalProps> = (
  { children },
  ref
) => {
  const open = () => {
    if (modalWrapperRef.current) {
      modalWrapperRef.current.style.display = "flex";
    }
  };

  const close = () => {
    if (modalWrapperRef.current) {
      modalWrapperRef.current.style.display = "none";
    }
  };

  // Create a ref to access the modal wrapper div
  const modalWrapperRef = React.useRef<HTMLDivElement>(null);

  // Expose the open and close functions through the ref
  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <ModalWrapper ref={modalWrapperRef} isOpen={false}>
      {children}
    </ModalWrapper>
  );
};

export default forwardRef(Modal);
