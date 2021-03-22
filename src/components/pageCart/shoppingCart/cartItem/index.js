import React from "react";

import "./cartItem.css";

const CartItem = ({img, name, price}) => {
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
            <button className="cart__checkout">Remove from Cart</button>
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
