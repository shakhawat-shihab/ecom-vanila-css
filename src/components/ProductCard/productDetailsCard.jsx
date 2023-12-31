import React, { useState } from "react";
import ProductModal from "../productModal/productModal";
import "./productDetailsCard.scss";
import Rating from "react-rating";
// import myDb from "../../localStorgae/db";

const ProductDetailsCard = ({ props, reloadCart }) => {
  const {
    title,
    thumbnail,
    price,
    rating,
    description,
    discountPercentage,
    brand,
    category,
    id,
  } = props;
  // console.log(reloadCart);

  const addProductToLocalStorage = (productId, quantity) => {
    // Check if local storage is supported by the browser
    if (typeof Storage !== "undefined") {
      // Get the current shopping cart from local storage (if it exists)
      const currentCart = JSON.parse(localStorage.getItem("cart")) || {};
      // Add or update the quantity of the product
      currentCart[productId] = (currentCart[productId] || 0) + quantity;
      // Save the updated cart back to local storage
      localStorage.setItem("cart", JSON.stringify(currentCart));
      console.log(
        `Product ${productId} added to cart with quantity ${quantity}.`
      );
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  };

  return (
    <div className="product-card">
      <img src={thumbnail} alt="product image" width="100%" height="300px" />
      {/* <div> */}
      <div className="product-card-info">
        <h3>{title}</h3>
        <div className="brand-category">
          <p>Brand: {brand}</p>
          <p>
            <i className="fa-solid fa-tag"></i>
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
              // alert("add to cart button clicked");
              addProductToLocalStorage(id, 1);
              reloadCart();
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
