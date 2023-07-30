import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Public = () => {
  const token = localStorage.getItem("token");
  return !token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default Public;