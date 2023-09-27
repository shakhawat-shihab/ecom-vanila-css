import React from "react";
import "./productCartCard.scss";

const ProductCartCard = ({ props, reloadCart }) => {
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
  // Function to remove a product from local storage
  function removeProductFromLocalStorage(productId) {
    // Check if local storage is supported by the browser
    if (typeof Storage !== "undefined") {
      // Get the current shopping cart from local storage (if it exists)
      const currentCart = JSON.parse(localStorage.getItem("cart")) || {};

      // Check if the product exists in the cart
      if (currentCart.hasOwnProperty(productId)) {
        // Remove the product from the cart
        delete currentCart[productId];

        // Save the updated cart back to local storage
        localStorage.setItem("cart", JSON.stringify(currentCart));

        console.log(`Product ${productId} removed from cart.`);
      } else {
        console.log(`Product ${productId} was not found in the cart.`);
      }
    } else {
      console.error("Local storage is not supported in this browser.");
    }
  }

  return (
    <div className="product-card">
      <img src={thumbnail} alt="product image" width="100%" height="300px" />

      <div className="product-card-info">
        <h3>{title}</h3>
        <div className="price">
          <h4>Price: {price} $ </h4>
          {/* <h5> ({discountPercentage} % Discount)</h5> */}
        </div>

        <div className="button-container">
          <button
            className="order-button"
            onClick={(e) => {
              // alert("add to cart button clicked");
              removeProductFromLocalStorage(id);
              reloadCart();
              e.stopPropagation();
            }}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCartCard;
