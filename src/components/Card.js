import React from "react";

const CardBlock = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={props.image}
        alt={props.title}
        style={{ objectFit: "cover", height: "50%" }}
      />

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          href="#"
          className="btn btn-block btn-outline-secondary btn-secondary w-100 text-light">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CardBlock;
