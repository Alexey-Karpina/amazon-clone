import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Login from "./components/login";
import Main from "./components/main";
import PageCart from "./components/pageCart";
import { useStateValue } from "./context/stateProvider";
import { auth } from "./firebase";

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/cart" component={PageCart} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
