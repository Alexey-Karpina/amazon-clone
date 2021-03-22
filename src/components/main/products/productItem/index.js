import React from "react";

import productImage from "../../../../images/product1.png";

import "./productItem.css";

const ProductItem = ({ key }) => {
  return (
    <li className="products__item" key={key}>
      <img src={productImage} alt="Product" className="products__img" />
      <span className="products__name">
        TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model
      </span>
      <ul className="products__rating">
        <li>&#9733;</li>
      </ul>
      <span className="products__category">Electronics</span>
      <strong className="products__price">{`$169.00`}</strong>
      <small className="products__ships">Ships to Ukraine</small>
      <span className="products__certified">Amazon Certified: Works with Alexa</span>
      <button className="products__add">Add to Cart</button>
    </li>
  );
};

export default ProductItem;
