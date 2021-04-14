import React from "react";
import { useStateValue } from "../../../../context/stateProvider";

import "./productItem.css";

type ProductItemType = {
  id: number;
  name: string;
  rating: number;
  category: string;
  price: number;
  image: string;
};

const ProductItem = ({
  id,
  name,
  rating,
  category,
  price,
  image,
}: ProductItemType) => {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: name,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <li className="products__item" key={id}>
      <img src={image} alt="Product" className="products__img" />
      <span className="products__name">{name}</span>
      <ul className="products__rating">
        {Array(rating)
          .fill(undefined)
          .map((_, i) => (
            <li>&#9733;</li>
          ))}
      </ul>
      <span className="products__category">{category}</span>
      <strong className="products__price">{`$${price}`}</strong>
      <small className="products__ships">Ships to Ukraine</small>
      <span className="products__certified">
        Amazon Certified: Works with Alexa
      </span>
      <button className="products__add" onClick={addToCart}>
        Add to Cart
      </button>
    </li>
  );
};

export default ProductItem;
