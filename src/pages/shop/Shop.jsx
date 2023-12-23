import React, { useRef } from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./Product";
import "./Shop.css";

export const Shop = () => {
  const storeRef = useRef();

  const scrollToStore = () => {
    storeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="shop">
      <div className="welcome-section">
        <h1>TOKOKIBOT STORE</h1>
        <p>Let's Growth Your Productivity with Amazing Gear</p>
        <button onClick={scrollToStore}>Go To Store</button>
      </div>

      <div className="content" ref={storeRef}>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
