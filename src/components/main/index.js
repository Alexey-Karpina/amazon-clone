import React from "react";
import Products from "./products";
import MainSlider from "./slider";

import './main.css';

const Main = () => {
  return (
    <main className="page__main">
      <div className="wrapper">
        <MainSlider />
        <Products />
      </div>
    </main>
  );
};

export default Main;
