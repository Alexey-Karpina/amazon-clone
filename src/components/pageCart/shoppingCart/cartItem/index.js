import React from "react";

import "./cartItem.css";

const CartItem = () => {
  return (
    <>
      <li className="cart__item">
        <div className="item__left">
          <input type="checkbox" className="item__check" />
          <img
            src="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_AA180_.jpg"
            alt="Item"
            className="item__img"
          />
          <div className="item__info">
            <span className="item__name">
              HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display
              (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt
              Adjustment for Ergonomic Viewing - HDMI and DisplayPort -
              (1D0J9AA#ABA)
            </span>
            <small className="item__avail">In Stock</small>
            <span className="item__qty">{`Qty: 1`}</span>
          </div>
        </div>
        <div className="item__right">
          <strong className="item__price">$119.99</strong>
        </div>
      </li>
    </>
  );
};

export default CartItem;
