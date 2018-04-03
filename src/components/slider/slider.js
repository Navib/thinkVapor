import React, { Component } from "react";
import Swiper from "react-id-swiper";

import Radial from "../radial";
import PAGES from "./slide";
import Animate from "./animate";

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
          {PAGES.map(page => (
            <div
              className="page page-type"
              data-hash={page.slide}
              key={page.id}
            >
              <div className={`lost-grid lost-grid-${page.slide}`}>
                <div className={`box ${page.slide}-box`}>
                  <h1 className="title">{page.title.toUpperCase()}</h1>
                  <p className="subHead_A">{page.subHead_1.toUpperCase()}</p>
                  <div
                    className={page.button}
                    onClick={() => {
                      Animate.onClickStart(this.swiper);
                    }}
                  />
                  <p className="subHead_C">
                    {page.subHead_3 ? page.subHead_3.toUpperCase() : ""}
                  </p>
                  <p className="subHead_B">{page.subHead_2.toUpperCase()}</p>
                </div>
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default Slider;
