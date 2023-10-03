import React from "react";
import Banner from "../banner/banner";
import SmartPhone from "../product-section/smartPhone/smartPhone";
import InsertProduct from "../insertProduct/insertProduct";
import Products from "../product-section/products/products";
import UpdateProduct from "../updateProduct/updateProduct";
import DeleteProduct from "../deleteProduct/deleteProduct";
import Subscribe from "../subscribe/subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <SmartPhone />
      <Products />
      <InsertProduct />
      <hr />
      <UpdateProduct />
      <hr />
      <DeleteProduct />
      <hr />
      <Subscribe />
    </div>
  );
};

export default Home;
