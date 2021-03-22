import React from "react";

import "./cartSubtotal.css";

const CartSubtotal = () => {
  return (
    <section className="cart__subtotal">
      <div className="subtotal__title">
        <span>{`Subtotal (52 items):`}</span>
        <strong>{`$123`}</strong>
      </div>
      <button className="cart__checkout">Proceed to checkout</button>
    </section>
  );
};

export default CartSubtotal;
