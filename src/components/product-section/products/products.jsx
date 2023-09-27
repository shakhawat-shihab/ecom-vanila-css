import React, { useContext, useEffect, useState } from "react";
import "./products.style.scss";
import ProductDetailsCard from "../../ProductCard/productDetailsCard";
import ProductCardImage from "../../ProductCard/productCardImage";
import ProductCartCard from "../../ProductCard/productCartCard";
import { MyContext } from "../../../App";

const Products = () => {
  const { user } = useContext(MyContext);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loadCart, setLoadCart] = useState(true);

  const reloadCart = () => {
    console.log("reload cart called");
    setLoadCart(!loadCart);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.products));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (typeof Storage !== "undefined") {
          // Get the current shopping cart from local storage (if it exists)
          const currentCart = JSON.parse(localStorage.getItem("cart")) || {};
          // console.log("currentCart ", currentCart);
          const array = [];
          const productIdsInCart = Object.keys(currentCart);
          // console.log(productIdsInCart);
          data?.products?.map((x) => {
            if (productIdsInCart.includes(x.id.toString())) {
              array.push(x);
            }
          });
          // console.log("array ---- ", array);
          setCart(array);
        } else {
          setCart([]);
        }
      });
  }, [loadCart]);

  // function getAllProductsFromLocalStorage() {
  //   // Check if local storage is supported by the browser
  //   if (typeof Storage !== "undefined") {
  //     // Get the current shopping cart from local storage (if it exists)
  //     const currentCart = JSON.parse(localStorage.getItem("cart")) || {};

  //     return currentCart;
  //   } else {
  //     console.error("Local storage is not supported in this browser.");
  //     return {};
  //   }
  // }

  return (
    <div className="product-container">
      <div className="product-title">
        <h2 style={{ textAlign: "center" }}> All Products</h2>
      </div>
      <div className="product-section">
        <div className="product-card-container">
          {products?.map((x) => (
            <ProductDetailsCard props={x} key={x?.id} reloadCart={reloadCart} />
          ))}
        </div>
        <div className="cart-container">
          <h2 style={{ textAlign: "center", color: "#F0932B" }}>
            {`${user?.name ? user?.name + "'s" : "My "} `}
            Cart
          </h2>
          {cart?.length ? (
            <div className="cart">
              {cart?.map((x) => (
                <ProductCartCard
                  props={x}
                  key={x?.id}
                  reloadCart={reloadCart}
                />
              ))}
            </div>
          ) : (
            <div>
              <h2
                style={{
                  marginTop: "140px",
                  color: "gray",
                  textAlign: "center",
                }}
              >
                {" "}
                Your Cart is Empty
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
