import React, { useEffect, useState } from "react";
import "./products.style.scss";
import ProductDetailsCard from "../../ProductCard/productDetailsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.products));
  }, []);

  return (
    <div className="product-container">
      <div className="product-title">
        <h2 style={{ textAlign: "center" }}> All Products</h2>
      </div>

      <div className="product-card-container">
        {products?.map((x) => (
          <ProductDetailsCard props={x} key={x?.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
