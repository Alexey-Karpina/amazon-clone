import React from "react";
import { getCartTotal } from "../../../context/reducer";
import { useStateValue } from "../../../context/stateProvider";

import "./cartSubtotal.css";

const CartSubtotal = () => {
  const [{ cart }] = useStateValue();
  return (
    <section className="cart__subtotal">
      <div className="subtotal__title">
        <span>{`Subtotal (${cart?.length} items):`}</span>
        <strong>{`$${getCartTotal(cart)}`}</strong>
      </div>
      <button className="cart__checkout">Proceed to checkout</button>
    </section>
  );
};

export default CartSubtotal;
