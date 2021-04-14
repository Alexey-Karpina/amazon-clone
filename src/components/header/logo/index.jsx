import React from 'react'
import './logo.css';
import headerLogo from '../../../images/logo.png';

const Logo = () => {
    return (
        <a href="/" className="header__logo">
            <img src={headerLogo} alt="Amazon Clone Logo"/>
        </a>
    )
}

export default Logo;
