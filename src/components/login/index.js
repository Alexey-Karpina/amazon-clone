import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./login.css";

import blackLogo from "../../images/logo-black.png";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <section className="page__login">
      <img src={blackLogo} alt="Login logo" width="103px" />
      <div className="login__signin">
        <form method="post" className="login__form">
          <h2>Sign-In</h2>
          <label className="label__email">
            <strong>E-mail</strong>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label__password">
            <strong>Password</strong>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" value="Sign In" onClick={signIn} />
        </form>
      </div>
      <div className="login__new">
        <small>New to Amazon?</small>
      </div>
      <div className="login__reg">
        <button onClick={register}>Create your Amazon account</button>
      </div>
    </section>
  );
};

export default Login;
