import React from "react";
import "./common.css";

export default function Card({ title, price, description, category, image, className="card" }) {
  return (
    <div className={className}>
      <img src={image} alt="title" />
      <h3>{category}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="price-Cart">
        <span>Price: {price}$</span>
        <div className="addButton">Add</div>
      </div>
    </div>
  );
}
