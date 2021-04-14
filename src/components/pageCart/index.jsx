import React from "react";
import ShoppingCart from "./shoppingCart";

import "./pageCart.css";
import CartSubtotal from "./cartSubtotal";

const PageCart = () => {
  return (
    <section className="page__cart">
      <ShoppingCart />
      <CartSubtotal />
    </section>
  );
};

export default PageCart;
