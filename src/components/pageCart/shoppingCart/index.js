import React from "react";
import { useStateValue } from "../../../context/stateProvider";
import CartItem from "./cartItem";

import "./shoppingCart.css";
const ShoppingCart = () => {
  const [{ cart }, dispatch] = useStateValue();

  const onDelete = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  return (
    <section className="cart__shopping">
      <div className="cart__header">
        <strong className="cart__title">Shopping Cart</strong>
        <small className="cart__select">Deselect all items</small>
      </div>
      <ul className="cart__list">
        {cart.map((item) => {
          console.log(item);
          const { image, price, title, id } = item;
          return (
            <CartItem
              img={image}
              name={title}
              price={price}
              onDelete={() => onDelete(id)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ShoppingCart;
