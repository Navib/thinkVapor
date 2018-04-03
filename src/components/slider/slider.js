import React, { Component } from "react";
import Swiper from "react-id-swiper";
import Animate from "./animate";
import Radial from "../radial";
import Home from "./pages/home";
import Who from "./pages/who";
import Products from "./pages/products";
import Benefits from "./pages/benefits";
import Contact from "./pages/contact";

const params = {
  direction: "vertical",
  speed: 900,
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  hashNavigation: true
};

class Slider extends Component {
  constructor() {
    super();
    this.swiper = null;
  }
  componentDidMount() {
    Animate.onChange(this.swiper);
    Animate.showLogo(this.swiper);
  }
  render() {
    return (
      <div className="swiper-filter">
        <Radial />
        <h1 id="logo">COMPANY NAME</h1>
        <Swiper
          {...params}
          ref={node => {
            if (node) this.swiper = node.swiper;
          }}
        >
          <div className="page page-type" data-hash="home">
            <Home
              swiper={this.swiper}
              start={() => {
                Animate.onClickStart(this.swiper);
              }}
            />
          </div>
          <div className="page page-type" data-hash="who-we-are">
            <Who />
          </div>
          <div className="page page-type" data-hash="products">
            <Products />
          </div>
          <div className="page page-type" data-hash="benefits">
            <Benefits />
          </div>
          <div className="page page-type" data-hash="contact">
            <Contact />
          </div>
        </Swiper>
      </div>
    );
  }
}

export default Slider;
