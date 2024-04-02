import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./route/PrivateRoute";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="homepage_wrap">
      <Navbar />
      <div className="margin-top">
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<PrivateRoute />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
