import React from "react";

const Column = props => (
  <div className="lost-container">
    <div className="col-1 center">
      <div className="product">
        <img src="http://via.placeholder.com/220x230" className="prod-img" />
        <div className="overlay">
          <h3>{props.product.name}</h3>
          <p className="prod-text">{props.product.text}</p>
          <a href="#" className="shop-now-cta">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Column;
