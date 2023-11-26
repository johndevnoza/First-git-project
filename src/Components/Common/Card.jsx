import React from "react";
import "./common.css";

export default function Card({ title, price, description, category, image }) {
  return (
    <div className="card">
      <img src={image} alt="title" />
      <h3>{category}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>Price: {price}$</span>
    </div>
  );
}
