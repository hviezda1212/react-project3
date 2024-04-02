import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetail from "../page/ProductDetail";
import '../assets/css/homepage.css';

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
