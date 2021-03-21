import React from "react";
import Slider from "react-slick";

import { IMG } from "./sliderImages";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

const NextArrow = ({ className, onClick, style }) => {
  return <div className={className} onClick={onClick} style={{...style}}/>;
};
const PrevArrow = ({ className, onClick, style }) => {
  return <div className={className} onClick={onClick} style={{...style}} />;
};

const settings = {
  lazyLoad: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow className="slider__next"/>,
  prevArrow: <PrevArrow />,
};

const MainSlider = () => {
  return (
    <section className="main__slider">
      <div className="wrapper">
        <Slider {...settings} className="slider__container">
          {IMG.map((src) => {
            return (
              <div key={src}>
                <img src={src} alt="Slider" />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default MainSlider;
