import React, { Component } from "react";
import Swiper from "react-id-swiper";

import Radial from "../radial";

const params = {
  direction: "vertical",
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
  componentDidMount() {}
  render() {
    return (
      <div className="swiper-filter">
        <Radial />
        <Swiper {...params}>
          <div className="page page-type" data-hash="home">
            Slide 1
          </div>
          <div className="page page-type" data-hash="slide2">
            Slide 2
          </div>
          <div className="page page-type" data-hash="slide3">
            Slide 3
          </div>
          <div className="page page-type" data-hash="slide4">
            Slide 4
          </div>
          <div className="page page-type" data-hash="slide5">
            Slide 5
          </div>
        </Swiper>
      </div>
    );
  }
}

export default Slider;
