import React from "react";
import Swiper from "react-id-swiper";

const onChange = swiper => {
  if (swiper) {
    const filter = document.querySelector(".radial");
    swiper.on("slideChangeTransitionStart", function() {
      //console.log(swiper.activeIndex);
      filter.style.transform = "scale(1.2)";
    });
  }
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

const slideIn = swiper => {
  if (swiper) {
    const bg = document.getElementById("bg");
    const wImg = document.getElementById("whoImg");
    const rSide = document.getElementById("rSide");
    const filter = document.querySelector(".radial");

    swiper.on("slideChangeTransitionEnd", function() {
      console.log("please");
      switch (swiper.activeIndex) {
        case 1:
          bg.style.height = "380px";
          filter.style.transform = "scale(1)";
          wImg.style.opacity = "1";
          wImg.style.width = "100%";
          rSide.style.opacity = "1";
          break;
        default:
          bg.style.height = "0";
          wImg.style.opacity = "0";
          wImg.style.width = "0";
          rSide.style.opacity = "0";
          filter.style.transform = "scale(1)";
          filter.style.backgroundImage = "url(./assets/vape_bg.jpg)";
          break;
      }
    });
  }
};

const growDiv = swiper => {
  if (swiper) {
    const stretch = document.getElementById("stretch");

    swiper.on("slideChangeTransitionStart", function() {
      switch (swiper.activeIndex) {
        case 1:
          stretch.style.bottom = "-100vh";
          break;
        case 2:
          stretch.style.bottom = "-60vh";
          break;
        case 3:
          stretch.style.bottom = "40vh";
          break;
        case 4:
          stretch.style.bottom = "100vh";
          break;
        case 5:
          stretch.style.bottom = "100vh";
          break;
        default:
          break;
      }
    });
  }
};

const fadeContent = swiper => {
  if (swiper) {
    const product = document.querySelector(".col-1");

    swiper.on("slideChangeTransitionEnd", function() {
      switch (swiper.activeIndex) {
        case 2:
          product.style.opacity = "1";
          break;
        default:
          product.style.opacity = "0";
          break;
      }
    });
  }
};

export default {
  onChange: swiper => onChange(swiper),
  onClickStart: swiper => onClickStart(swiper),
  showLogo: swiper => showLogo(swiper),
  slideIn: swiper => slideIn(swiper),
  growDiv: swiper => growDiv(swiper),
  fadeContent: swiper => fadeContent(swiper)
};
