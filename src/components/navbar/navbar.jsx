import React, { useContext } from "react";
import "./navbar.style.css";
import { MyContext } from "../../App";
const Navbar = () => {
  const { user, logInUser, logOutUser } = useContext(MyContext);
  console.log("user ", user);
  return (
    <nav>
      <ul className="nav-container">
        <div className="logo-container">
          <span>Mini Store</span>
        </div>
        <div className="navbar-optinos">
          <li>
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          {user?.email ? (
            <li>
              <button
                className="logout-btn"
                onClick={() => {
                  console.log("logout......");
                  logOutUser();
                }}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="login-btn"
                onClick={() => {
                  console.log("login......");
                  logInUser();
                }}
              >
                Log In
              </button>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
