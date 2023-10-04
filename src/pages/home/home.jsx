import React from "react";
import Banner from "../../components/banner/banner";
import SmartPhone from "../../components/product-section/smartPhone/smartPhone";
import InsertProduct from "../../components/insertProduct/insertProduct";
import Products from "../../components/product-section/products/products";
import UpdateProduct from "../../components/updateProduct/updateProduct";
import DeleteProduct from "../../components/deleteProduct/deleteProduct";
import Subscribe from "../../components/subscribe/subscribe";

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
