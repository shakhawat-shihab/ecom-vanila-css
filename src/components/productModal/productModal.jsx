import React from "react";
import "./productModal.scss";
const ProductModal = ({ turnOffModalVisibility, product }) => {
  const { title, thumbnail, price, id } = product;
  console.log(product);
  console.log("inside");
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div onClick={() => turnOffModalVisibility()} className="close-button">
          <p>X</p>
        </div>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default ProductModal;
