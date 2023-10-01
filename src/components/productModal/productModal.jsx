import React from "react";
import "./productModal.scss";
import ImageViewer from "../imageViewer/imageViewer";
const ProductModal = ({ turnOffModalVisibility, product }) => {
  const { title, thumbnail, price, description, id, images } = product;
  console.log(product);
  console.log("inside");
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-head">
          <div
            onClick={() => turnOffModalVisibility()}
            className="close-button"
          >
            <p>X</p>
          </div>
          <hr />
        </div>

        <div className="modal-body">
          <div className="modal-image">
            {/* <img src={thumbnail} alt="" width="70%" /> */}
            <ImageViewer images={images} thumbnail={thumbnail} />
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
