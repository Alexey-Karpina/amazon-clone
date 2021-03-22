import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import "./header.css";
import Deliver from "./deliver";
import Search from "./search";
import Language from "./language";
import Account from "./account";
import Orders from "./orders";
import Cart from "./cart";

const Header = () => {
  return (
    <header className="page__header">
      <Link to="/">
        <Logo />
      </Link>
      <Deliver />
      <Search />
      <Language />
      <Account />
      <Orders />
      <Link to="/cart">
        <Cart />
      </Link>
    </header>
  );
};

export default Header;
