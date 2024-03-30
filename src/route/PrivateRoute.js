import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";
import '../assets/css/homepage.css';

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
