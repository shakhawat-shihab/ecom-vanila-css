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
import InsertProduct from "./components/insertProduct/insertProduct";
import DeleteProduct from "./components/deleteProduct/deleteProduct";
import UpdateProduct from "./components/updateProduct/updateProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/notFound/notFound";
import ProductDetails from "./components/productDetails/productDetails";
import Login from "./components/login/login";
import Register from "./components/login/register/register";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

// export const MyContext = createContext();

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
      {/* <MyContext.Provider value={{ user, logInUser, logOutUser }}> */}

      {/* </MyContext.Provider> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <hr />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
