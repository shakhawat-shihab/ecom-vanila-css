import React, { useContext } from "react";
import "./navbar.style.css";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const { user, logInUser, logOutUser } = useContext(MyContext);
  // console.log("user ", user);
  const navigate = useNavigate();
  const user = {};
  return (
    <nav>
      <ul className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <span>Mini Store</span>
          </Link>
        </div>

        <div className="navbar-optinos">
          <li>
            <NavLink
              to="/home"
              className={({ isActive, isPending }) => isActive && "active"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) => isActive && "active"}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) => isActive && "active"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) => isActive && "active"}
            >
              About
            </NavLink>
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
                  // console.log("login......");
                  // logInUser();
                  navigate("/login");
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
