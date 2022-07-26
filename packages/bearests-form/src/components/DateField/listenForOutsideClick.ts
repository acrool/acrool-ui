import {RefObject} from 'react';

export default function listenForOutsideClick(listening: boolean, setListening: (isListening: boolean) => void, menuRef: RefObject<any>, setIsOpen: (isOpen: boolean) => void) {
    return () => {
        if (listening) return;
        if (!menuRef.current) return;
        setListening(true);
        [`click`, `touchstart`].forEach((type) => {
            document.addEventListener(`click`, (evt) => {
                if (menuRef.current.contains(evt.target)) return;

                console.log('setIsOpen(false)');
                // setIsOpen(false);
            });
        });
    }
}