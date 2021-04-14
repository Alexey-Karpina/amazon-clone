import React from "react";

import "./cartItem.css";

<<<<<<< HEAD:src/components/pageCart/shoppingCart/cartItem/index.js
const CartItem = ({img, name, price, onDelete}) => {
=======
type CartItemType = {
  name: string;
  img: string;
  price: number;
  onDelete: any;
};

const CartItem = ({img, name, price, onDelete}: CartItemType ) => {
>>>>>>> Develop:src/components/pageCart/shoppingCart/cartItem/index.tsx
  return (
    <>
      <li className="cart__item">
        <div className="item__left">
          <input type="checkbox" className="item__check" />
          <img
            src={img}
            alt="Item"
            className="item__img"
          />
          <div className="item__info">
            <span className="item__name">
              {name}
            </span>
            <small className="item__avail">In Stock</small>
            <span className="item__qty">{`Qty: 1`}</span>
            <button className="cart__checkout" onClick={onDelete}>Remove from Cart</button>
          </div>
        </div>
        <div className="item__right">
          <strong className="item__price">{`$${price}`}</strong>
        </div>
      </li>
    </>
  );
};

export default CartItem;
