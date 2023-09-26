import React, { useState } from 'react';
import ProductModal from '../productModal/productModal';

const ProductCardImage = ({props}) => {
    const [showModal,setShowModal]=useState(false);
    const{title,thumbnail, price }=props;
    console.log(showModal);
    const turnOffModalVisibility=()=>{
        console.log("shihab")
        setShowModal(false);
    }
    return (
        <div className='smart-phone-card'  onClick={()=>{setShowModal(true)}}>
            <img src={thumbnail} alt="product image" width="100%" height="300px" />
            <div className='info'>
                <p>{title}</p>
                <p>{price}$</p>
            </div>
            
            {/* <div className={`${showModal==true ? 'visible' :'not-visible' }`}>
                <ProductModal  turnOffModalVisibility={turnOffModalVisibility}/>
            </div> */}
           
            {/* {
                showModal
                ?
                <ProductModal   turnOffModalVisibility={turnOffModalVisibility} />
                :
                <></>
            } */}
           
        </div>
    );
};

export default ProductCardImage;