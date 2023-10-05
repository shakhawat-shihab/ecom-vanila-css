import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authenticate = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Authenticate;
