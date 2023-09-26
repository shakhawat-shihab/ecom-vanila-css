import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import SmartPhone from "./components/product-section/smartPhone/smartPhone";
import ProductDetailsCard from "./components/ProductCard/productDetailsCard";
import Products from "./components/product-section/products/products";
import Footer from "./components/footet/footer";
import Subscribe from "./components/subscribe/subscribe";

function App() {
  // const [showModal, setShowModal] = useState(false);
  // let turnOffModalVisibility = () => {
  //   console.log("shihab");
  //   setShowModal(false);
  // };
  return (
    <>
      {/* {showModal && (
        <ProductModal turnOffModalVisibility={turnOffModalVisibility} id={id} />
      )} */}
      <Navbar />
      <Banner />
      <SmartPhone />
      <Products />
      <hr />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
