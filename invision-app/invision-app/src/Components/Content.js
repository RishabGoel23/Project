import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <div className="content-container">
      <h1>Content Store</h1>
      <div className="jumbotron">
        <h4>
          Got bulk orders or almost similar orders? Fill the order briefs in an
          excel sheet
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          velit nec lacinia auctor. Duis in ultrices ex. Etiam vitae nunc sit
          amet urna molestie vulputate. Praesent ac dui iaculis, egestas arcu
          sed, porta leo.
          <a className="p-link" href="/">
            Sed mattis, ligula ac sollicitudin pretium
          </a>
        </p>
        <button>Order via Excel Sheet</button>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Content;
