import React, { useState } from "react";
import ProductModal from "../productModal/productModal";
import "./productCardImage.scss";

const ProductCardImage = ({ props }) => {
  const { title, thumbnail, price, id } = props;
  const [showModal, setShowModal] = useState(false);

  let turnOffModalVisibility = () => {
    // console.log("shihab");
    setShowModal(false);
  };
  // console.log("ssss ", showModal);

  return (
    <div className="smart-phone-card ">
      <img
        className="smart-phone-card-img "
        src={thumbnail}
        alt="product image"
        width="100%"
        height="300px"
        onClick={() => {
          setShowModal(true);
          console.log("hello");
        }}
      />
      <div className="info">
        <p>{title}</p>
        <p>{price}$</p>
      </div>

      {showModal && (
        <ProductModal
          turnOffModalVisibility={turnOffModalVisibility}
          product={props}
        />
      )}
    </div>
  );
};

export default ProductCardImage;
