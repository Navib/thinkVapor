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
    swiper.on("slideNextTransitionStart", function() {
      if (swiper.activeIndex > 0) {
        logo.style.top = "0px";
        logo.style.opacity = "1";
        logo.style.fontSize = "1.8em";
      }
    });
    swiper.on("slidePrevTransitionEnd", function() {
      if (swiper.activeIndex === 0) {
        logo.style.top = "3.6em";
        logo.style.opacity = "1";
        logo.style.fontSize = "2.4em";
      }
    });
  }
};

export default {
  onChange: swiper => onChange(swiper),
  onClickStart: swiper => onClickStart(swiper),
  showLogo: swiper => showLogo(swiper)
};
