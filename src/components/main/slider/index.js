import React from "react";
import Slider from "react-slick";

import { IMG } from "./sliderImages";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";


const settings = {
  lazyLoad: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MainSlider = () => {
  return (
    <section className="main__slider">
        <Slider {...settings} className="slider__container">
          {IMG.map((src) => {
            return (
              <div key={src}>
                <img src={src} alt="Slider" />
              </div>
            );
          })}
        </Slider>
    </section>
  );
};

export default MainSlider;
