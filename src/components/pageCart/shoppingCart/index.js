import React from "react";
import CartItem from "./cartItem";

import "./shoppingCart.css";
const ShoppingCart = () => {
  return (
    <section className="cart__shopping">
      <div className="cart__header">
        <strong className="cart__title">Shopping Cart</strong>
        <small className="cart__select">Deselect all items</small>
      </div>
      <ul className="cart__list">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </section>
  );
};

export default ShoppingCart;
