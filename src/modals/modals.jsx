import React from "react";
const Modal=({isOpen, onClose, children}) =>{
    if(!isOpen) return null;

    return(
        <div className="modal-overlay">
            <div className="modal">
                {children}
                <button className="modal-close" 
                style={{position: 'absolute', width: '1.5rem', height: '1.5rem', right: '4px', top: '3px'}} 
                onClick={onClose}>X</button>
            </div>
        </div>
    );
};
export default Modal;