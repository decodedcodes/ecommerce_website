import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProductPage from "./ProductPage"; // Import the Product Page

function App() {
  return (
    <Router>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="mb-4">Welcome to Our E-Commerce Platform</h1>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductPage />} /> {/* Add Product Page Route */}
        </Routes>
        <p>
          <Link to="/products">View Products</Link> | 
          <Link to="/signup"> Sign Up</Link> | 
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </Router>
  );
}

export default App;
