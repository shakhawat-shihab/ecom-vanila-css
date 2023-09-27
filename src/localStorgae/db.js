class MyDb {
  // Function to add a product to local storage
  addProductToLocalStorage = (productId, quantity) => {
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
  removeProductFromLocalStorage = (productId) => {
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
  };
}

const myDb = new MyDb();
module.exports = myDb;
