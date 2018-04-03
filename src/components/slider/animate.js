import React from "react";
import Swiper from "react-id-swiper";

const onChange = swiper => {
  if (swiper)
    swiper.on("slideChange", function() {
      //console.log(swiper.activeIndex);
    });
};

const onClickStart = swiper => {
  swiper.slideNext();
};

const showLogo = swiper => {
  if (swiper) {
    const logo = document.getElementById("logo");
    swiper.on("slideNextTransitionEnd", function() {
      if (swiper.activeIndex > 0) {
        logo.style.top = "0px";
        logo.style.opacity = "1";
      }
    });
    swiper.on("slidePrevTransitionStart", function() {
      if (swiper.activeIndex === 0) {
        logo.style.top = "-1.2em";
        logo.style.opacity = "0";
      }
    });
  }
};

export default {
  onChange: swiper => onChange(swiper),
  onClickStart: swiper => onClickStart(swiper),
  showLogo: swiper => showLogo(swiper)
};
