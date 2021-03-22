import React from "react";
import ProductItem from "./productItem";

import "./products.css";

const Products = () => {
  return (
    <section className="main__products">
        <ul className="products__list">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ul>
    </section>
  );
};

export default Products;
