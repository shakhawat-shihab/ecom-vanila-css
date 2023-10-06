import React, { useContext, useEffect, useState } from "react";
import "./products.style.scss";
import ProductDetailsCard from "../../ProductCard/productDetailsCard";
import ProductCartCard from "../../ProductCard/productCartCard";
import useProductHook from "../../../hooks/useProductHook";
import useCartHook from "../../../hooks/useCartHook";
import Spinner from "../../spinner/spinner";
import { useSelector } from "react-redux";

const Products = () => {
  const { isLoadingProduct, getAllProducts, getSearchedProduct } =
    useProductHook();
  const [products, setProducts] = useState([]);
  const { cart, isLoadingCart, getAllProductsFromCart } = useCartHook();
  const [loadCart, setLoadCart] = useState(true);
  const [search, setSearch] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  let productsArray = useSelector((state) => state.product.productList);

  const reloadCart = () => {
    console.log("reload cart called");
    setLoadCart(!loadCart);
  };

  useEffect(() => {
    if (productsArray.length == 0) getAllProducts();
  }, []);

  useEffect(() => {
    setProducts(productsArray);
  }, [productsArray]);

  useEffect(() => {
    getAllProductsFromCart();
  }, [loadCart]);

  // useEffect(() => {
  //   if (!firstTime) {
  //     const timeOutFunc = setTimeout(() => {
  //       getSearchedProduct(search);
  //     }, 3000);
  //     return () => clearTimeout(timeOutFunc);
  //   }
  // }, [firstTime]);

  return (
    <div className="product-container">
      <div className="product-title">
        <h2 style={{ textAlign: "center" }}> All Products</h2>
      </div>
      <div className="search-container">
        <form
        // onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onKeyUp={(e) => {
              setSearch(e?.target?.value);
            }}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="product-section">
        {isLoadingProduct ? (
          <Spinner />
        ) : (
          <div className="product-card-container">
            {products?.map((x) => (
              <ProductDetailsCard
                props={x}
                key={x?._id}
                reloadCart={reloadCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
