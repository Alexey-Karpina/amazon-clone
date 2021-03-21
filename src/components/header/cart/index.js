import React from 'react'

import cart from '../../../images/icon-cart.png';
import './cart.css';

const Cart = () => {
    return (
        <div className="header__cart">
            <img src={cart} alt="Cart"/>
            <strong>Cart</strong>
            <strong className="cart__count">0</strong>
        </div>
    )
}

export default Cart;
