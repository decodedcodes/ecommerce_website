import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = () => {
  const [products] = useState([
    { id: 1, name: "Laptop", price: "Rs-90000", description: "High performance laptop." },
    { id: 2, name: "Smartphone", price: "Rs-45000", description: "Latest model smartphone." },
    { id: 3, name: "Headphones", price: "Rs-2000", description: "Noise-canceling headphones." }
  ]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card p-3 shadow">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
