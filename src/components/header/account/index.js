import React from "react";
import { useStateValue } from "../../../context/stateProvider";
import { auth } from "../../../firebase";

import "./account.css";

const Account = () => {
  const [{ user }] = useStateValue();
  const handleAuth = () => {
      if (user) {
          auth.signOut();
      }
  };

  return (
    <div className="header__account" onClick={handleAuth}>
      <small>Hello, {user ? user.email : "Guest"}</small>
      <strong>{user ? "Sign Out" : "Sign In"}</strong>
    </div>
  );
};

export default Account;
