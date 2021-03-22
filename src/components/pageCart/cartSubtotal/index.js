import React from "react";
import { useStateValue } from "../../../context/stateProvider";

import "./cartSubtotal.css";

const CartSubtotal = () => {
  const [{ cart }] = useStateValue();

  const total = (accum, currentValue) => accum + currentValue;

  return (
    <section className="cart__subtotal">
      <div className="subtotal__title">
        <span>{`Subtotal (${cart?.length} items):`}</span>
        <strong>{`$${cart.length ? cart.map((item) => item.price).reduce(total) : 0}`}</strong>
      </div>
      <button className="cart__checkout">Proceed to checkout</button>
    </section>
  );
};

export default CartSubtotal;
