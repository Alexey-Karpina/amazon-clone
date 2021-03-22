import React from "react";
import ProductItem from "./productItem";

import "./products.css";


const Products = () => {
  return (
    <section className="main__products">
      <ul className="products__list">
        <ProductItem
          id={1}
          name={`TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model`}
          rating={3}
          category={`Electronics`}
          price={169.0}
          image={`https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_AA180_.jpg`}
        />
        <ProductItem
          id={2}
          name={`TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model`}
          rating={2}
          category={`Electronics`}
          price={169.0}
          image={`https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_AA180_.jpg`}
        />
        <ProductItem
          id={3}
          name={`TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model`}
          rating={5}
          category={`Electronics`}
          price={169.0}
          image={`https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_AA180_.jpg`}
        />
        <ProductItem
          id={4}
          name={`TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model`}
          rating={1}
          category={`Electronics`}
          price={169.0}
          image={`https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_AA180_.jpg`}
        />
      </ul>
    </section>
  );
};

export default Products;
