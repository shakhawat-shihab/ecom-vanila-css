import React from "react";
import "./productModal.scss";
const ProductModal = ({ turnOffModalVisibility, product }) => {
  const { title, thumbnail, price, description, id } = product;
  console.log(product);
  console.log("inside");
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div onClick={() => turnOffModalVisibility()} className="close-button">
          <p>X</p>
        </div>
        <hr />
        <div className="modal-body">
          <div className="modal-image">
            <img src={thumbnail} alt="" width="70%" />
          </div>
          <div className="modal-info">
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
