import React from "react";
import Swiper from "react-id-swiper";

const onChange = swiper => {
  if (swiper)
    swiper.on("slideChange", function() {
      console.log("changing");
    });
};

const onClickStart = swiper => {
  swiper.slideNext();
};
export default {
  onChange: swiper => onChange(swiper),
  onClickStart: swiper => onClickStart(swiper)
};
