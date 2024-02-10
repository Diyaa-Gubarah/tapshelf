import { ModalHandle } from '../components/modal/Modal';
import { useRef } from 'react';

const useModal = () => {
    const modalRef = useRef<ModalHandle>(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.open();
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return {
        modalRef,
        openModal,
        closeModal
    };
};

export default useModal;
