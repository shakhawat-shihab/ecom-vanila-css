import React, { useContext } from "react";
import "./navbar.style.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "../button/button";

const Navbar = () => {
  // const { user, logInUser, logOutUser } = useContext(MyContext);
  // console.log("user ", user);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logInFunction = () => {
    navigate("/login");
  };
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
              to="/add-product"
              className={({ isActive, isPending }) => isActive && "active"}
            >
              Insert
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/update-product"
              className={({ isActive, isPending }) => isActive && "active"}
            >
              Update
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/delete-product"
              className={({ isActive, isPending }) => isActive && "active"}
            >
              Delete
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) => isActive && "active"}
              >
                Profile
              </NavLink>
            </li>
          )}
          {token ? (
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
              <Button customClass="blue-btn" clickFunctionality={logInFunction}>
                Log In
              </Button>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
