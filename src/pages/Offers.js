import React from "react";
import "./styles/Offers.css";

import CardBlock from "../components/Card";
import research from "../images/research.png";
import Installation from "../images/installation.png";
import Monitoring from "../images/monitoring.webp";
import Maintenance from "../images/maintenance.jpg";
import Revamp from "../images/revamp.jpg";

const Offers = () => {
  return (
    <div className="container">
      <div className="slidethree">
        <h1>
          What Viridian<span>X</span> Offers
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
        }}>
        <CardBlock title={"Research & Planning"} image={research} />
        <CardBlock title={"Installation"} image={Installation} />
        <CardBlock title={"Monitoring"} image={Monitoring} />
        <CardBlock title={"Maintenance"} image={Maintenance} />
        <CardBlock title={"Revamp"} image={Revamp} />
      </div>
    </div>
  );
};

export default Offers;
