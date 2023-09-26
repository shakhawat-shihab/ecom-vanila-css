import React, { useState } from "react";
import ProductModal from "../productModal/productModal";
import "./productDetailsCard.scss";
import Rating from "react-rating";

const ProductDetailsCard = ({ props }) => {
  const {
    title,
    thumbnail,
    price,
    rating,
    description,
    discountPercentage,
    brand,
    category,
  } = props;

  return (
    <div
      className="product-card"
      // onClick={(e) => {
      //   alert("product clicked");
      //   setShowModal(true);
      // }}
    >
      <img src={thumbnail} alt="product image" width="100%" height="300px" />
      {/* <div> */}
      <div className="product-card-info">
        <h3>{title}</h3>
        <div className="brand-category">
          <p>Brand: {brand}</p>
          <p>
            <i class="fa-solid fa-tag"></i>
            <span style={{ marginLeft: "8px" }}>{category}</span>
          </p>
        </div>
        <div className="price">
          <h4>Price: {price} $ </h4>
          <h5> ({discountPercentage} % Discount)</h5>
        </div>
        <div>
          <Rating
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            style={{ color: "gold" }}
            initialRating={rating}
            readonly
          />
        </div>

        <div className="button-container">
          <button
            className="cart-button"
            onClick={(e) => {
              alert("add to cart button clicked");
              e.stopPropagation();
            }}
          >
            Add to cart
          </button>
          <button
            className="order-button"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            OrderNow
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProductDetailsCard;
