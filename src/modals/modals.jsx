import React from "react";

const Modal=({isOpen, onClose, children}) =>{
    if(!isOpen) return null;

    return(
        <div className="modal-overlay">
            <div className="modal">
                {children}
                <button className="modal-close" style={{position: 'absolute', width: '3rem', height: '3rem', right: '10px', top: '5px'}} onClick={onClose}>X</button>
            </div>
        </div>
    );
};
export default Modal;