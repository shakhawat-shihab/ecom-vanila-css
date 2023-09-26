import React from 'react';
import "./productModal.scss"
const ProductModal = ({ turnOffModalVisibility}) => {

    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div
                onClick={()=>turnOffModalVisibility(false)} 
                style={{display:'flex', justifyContent:'end', marginRight:'20px'}}
                >
                    <p className='close-button' >X</p>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;