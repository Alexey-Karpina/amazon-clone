import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import PageCart from "./components/pageCart";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/cart" component={PageCart} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
