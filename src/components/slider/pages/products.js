import React from "react";
import Column from "../../grids/column.js";

const page = {
  id: 2,
  slide: "products",
  title: "Vape Pens & Vaporizer Pens",
  subHead_1: "Subhead Tag Line one sentence",
  subHead_2: "TagLIne #2 Quick n Catchy",
  button: "plus-sign",
  product: {
    name: "Joyetech eGO AIO D22 XL Vape",
    type: "Battery",
    text:
      "the all-in-one vape pen technology, and they have consistently created incredible devices since day one. The latest version, the Joyetech eGO AIO D22 XL goes further than the initial designs, enabling vapes to have a pen offering all the features possible within a vape mod, encased in the convenient and portable styling of a vape pen. With a powerful 2300 mAh battery that handles long vape sessions and has no trouble lasting all day, the eGo AIO D22 XL is a reliable option for high performance on the go; perfect for busy people or those that travel a lot. Experience it for yourself!",
    img: "http://via.placeholder.com/150x300",
    button: "plus-sign"
  }
};

const Products = () => (
  <div className={`lost-grid lost-grid-${page.slide}`} key={page.id}>
    <div className={`box ${page.slide}-box`}>
      <h1 className="title">{page.title.toUpperCase()}</h1>
      <Column product={page.product} />
    </div>
  </div>
);

export default Products;
