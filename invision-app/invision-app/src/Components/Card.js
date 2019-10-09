import React from "react";

import "../css/Content.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <img
          alt="avatar"
          className="avatar"
          src="http://auroradesigns.co.za/demo/brandingsolved.co.za/img/avatar/1.jpg"
        />
        <h5 className="card-title">
          <span>
            Card title
            <br />
            from $100
          </span>
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button>Order Here</button>
      </div>
    </div>
  );
};

export default Card;
