import React from "react";

const CardBlock2 = (props) => {
  return (
    <div className="card" style={{ width: "18rem", height: "16rem" }}>
      <img
        className="card-img-top"
        src={props.image}
        alt={props.title}
        style={{ objectFit: "contain", height: "50%", padding: "20px" }}
      />
      <hr />
      <div className="card-body text-center ">
        <h5 className="card-title">{props.title}</h5>

        {/* <a
          href="#"
          className="btn btn-block btn-outline-secondary btn-secondary w-100 text-light">
          Learn More
        </a> */}
      </div>
    </div>
  );
};

export default CardBlock2;
