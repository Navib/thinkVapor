import React from "react";

const page = {
  id: 5,
  slide: "Contact",
  title: "Contact Title",
  subHead_1: "Subhead Tag Line one sentence",
  subHead_2: "TagLIne #2 Quick n Catchy",
  button: "contact-sign"
};

const Contact = () => (
  <div className={`lost-grid lost-grid-${page.slide}`} key={page.id}>
    <div className={`box ${page.slide}-box`}>
      <h1 className="title">{page.title.toUpperCase()}</h1>
      <p className="subHead_A">{page.subHead_1.toUpperCase()}</p>
      <p className="subHead_C">
        {page.subHead_3 ? page.subHead_3.toUpperCase() : ""}
      </p>
      <p className={`subHead_B ${page.slide}-text`}>
        {page.subHead_2.toUpperCase()}
      </p>
    </div>
  </div>
);

export default Contact;
