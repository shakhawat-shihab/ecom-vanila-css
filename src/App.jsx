import { createContext, useState } from "react";
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

export const MyContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const logInUser = () => {
    console.log("login clicked");
    setUser({ email: "shihabchtg@gmail.com", name: "shakhawat" });
  };
  const logOutUser = () => {
    console.log("logout clicked");
    setUser({});
  };

  return (
    <>
      <MyContext.Provider value={{ user, logInUser, logOutUser }}>
        <Navbar />
        <Banner />
        <SmartPhone />
        <Products />
      </MyContext.Provider>

      <hr />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
