import React from "react";
import Animate from "./../animate";

const page = {
  id: 0,
  slide: "home",
  title: " ",
  subHead_1: "Subhead Tag Line one sentence",
  subHead_2: "TagLIne #2 Quick n Catchy",
  subHead_3: "Start Your Experience",
  button: "start-btn"
};
const Home = props => (
  <div className={`lost-grid lost-grid-${page.slide}`} key={page.id}>
    <div className={`box ${page.slide}-box`}>
      <h1 className="title">{page.title.toUpperCase()}</h1>
      <p className="subHead_A">{page.subHead_1.toUpperCase()}</p>
      <div className={page.button} onClick={props.start} />
      <p className="subHead_C">
        {page.subHead_3 ? page.subHead_3.toUpperCase() : ""}
      </p>
      <p className={`subHead_B ${page.slide}-text`}>
        {page.subHead_2.toUpperCase()}
      </p>
    </div>
  </div>
);

export default Home;
