import React, { useState } from 'react';
import ProductModal from '../productModal/productModal';
import "./productDetailsCard.scss"

const ProductDetailsCard = ({props}) => {
    const{title,thumbnail, price, description }=props;
    
    return (
        <div className='product-card' onClick={(e)=> {alert("product clicked");}}  >
            <img src={thumbnail} alt="product image" width="100%" height="300px" />
            <div style={{padding:"10px"}}>
                    <div>
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <button className='order-button' onClick={(e)=> {alert("add to cart button clicked"); e.stopPropagation(); }}>
                            Add to cart
                        </button>
                    </div>
            </div>
            
        </div>
    );
};

export default ProductDetailsCard;