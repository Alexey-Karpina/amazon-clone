import React from "react";
import Logo from "./logo";
import './header.css';
import Deliver from "./deliver";
import Search from "./search";
import Language from "./language";
import Account from "./account";
import Orders from "./orders";
import Cart from "./cart";

const Header = () => {
  return (
    <header className="page__header">
      <Logo />
      <Deliver />
      <Search />
      <Language />
      <Account />
      <Orders />
      <Cart />
    </header>
  );
};

export default Header;
