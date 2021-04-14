import React from 'react'
import { useStateValue } from '../../../context/stateProvider';

import cartIcon from '../../../images/icon-cart.png';
import './cart.css';

const Cart = () => {

    const [{cart}] = useStateValue();

    return (
        <div className="header__cart">
            <img src={cartIcon} alt="Cart"/>
            <strong>Cart</strong>
            <strong className="cart__count">{cart?.length}</strong>
        </div>
    )
}

export default Cart;
