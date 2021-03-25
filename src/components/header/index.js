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
import { useStateValue } from "../../context/stateProvider";

const Header = () => {
    const [{ user }] = useStateValue();

  return (
    <header className="page__header">
        <h1>Test for work Travis ci!!!</h1>
      <Link to="/">
        <Logo />
      </Link>
      <Deliver />
      <Search />
      <Language />
      <Link to={!user && "/login"}>
        <Account />
      </Link>
      <Orders />
      <Link to="/cart">
        <Cart />
      </Link>
    </header>
  );
};

export default Header;
