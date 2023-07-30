import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Private = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default Private;
