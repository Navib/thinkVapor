import React from "react";

const page = {
  id: 1,
  slide: "who-we-are",
  title: "WHO WE ARE",
  subHead_1: "Subhead Tag Line one sentence",
  subHead_2: "TagLIne #2 Quick n Catchy",
  subHead_who:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyp",
  who_img: "http://via.placeholder.com/360x210"
};

const bgStyle = {
  backgroundColor: "black",
  height: "0",
  width: "250px",
  position: "absolute",
  left: "0",
  top: "4em",
  transition: "all .6s ease-in-out"
};
const titleStyle = {
  position: "absolute",
  top: "2em",
  color: "#fff"
};
const Who = () => (
  <div className={`lost-grid lost-grid-${page.slide}`} key={page.id}>
    <div className={`box ${page.slide}-box`}>
      <div className="title-bar" style={titleStyle}>
        <h1>{page.title.toUpperCase()}</h1>
      </div>
      <div className="left-side">
        <div style={bgStyle} id="bg" />
        <img src={page.who_img} id="whoImg" />
      </div>
      <div className="right-side" id="rSide">
        <h4>We are Committed to Customer Satisfaction</h4>
        <p>{page.subHead_who}</p>
      </div>
    </div>
  </div>
);

export default Who;
