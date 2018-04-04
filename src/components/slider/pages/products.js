import React from "react";
import Column from "../../grids/column.js";

const page = {
  id: 2,
  slide: "products",
  title: "Product Name",
  subHead_1: "Subhead Tag Line one sentence",
  subHead_2: "TagLIne #2 Quick n Catchy",
  button: "plus-sign",
  product: {
    name: "Vape Pen",
    type: "Battery",
    img: "http://via.placeholder.com/150x300",
    button: "plus-sign"
  }
};

const Products = () => (
  <div className={`lost-grid lost-grid-${page.slide}`} key={page.id}>
    <div className={`box ${page.slide}-box`}>
      <h1 className="title">{page.title.toUpperCase()}</h1>
      <Column />
    </div>
  </div>
);

export default Products;
