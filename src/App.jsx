import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Products from "./components/product-section/products/products";
import Footer from "./components/footet/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import Login from "./pages/login/login";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Register from "./pages/login/register/register";
import ProductDetails from "./pages/productDetails/productDetails";

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
