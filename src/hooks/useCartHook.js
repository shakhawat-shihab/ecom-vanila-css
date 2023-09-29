import { useState } from "react";

const useCartHook = () => {
  const [cart, setCart] = useState([]);
  const [isLoadingCart, setIsLoadingCart] = useState(false);

  const getAllProductsFromCart = () => {
    setIsLoadingCart(true);

    fetch("http://localhost:8000/products/all")
      .then((res) => res.json())
      .then((data) => {
        if (typeof Storage !== "undefined") {
          // Get the current shopping cart from local storage (if it exists)
          const currentCart = JSON.parse(localStorage.getItem("cart")) || {};
          // console.log("currentCart ", currentCart);
          const array = [];
          const productIdsInCart = Object.keys(currentCart);
          // console.log(productIdsInCart);
          data?.data?.products?.map((x) => {
            if (productIdsInCart.includes(x.id.toString())) {
              array.push(x);
            }
          });
          // console.log("array ---- ", array);
          setCart(array);
        } else {
          setCart([]);
        }
      })
      .finally(() => {
        setIsLoadingCart(false);
      });
  };

  return { cart, isLoadingCart, getAllProductsFromCart };
};

export default useCartHook;
