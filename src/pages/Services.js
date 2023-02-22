import React from "react";
import CardBlock2 from "../components/Card2";
import research from "../images/Logo1.png";
import Installation from "../images/Logo2.png";
import Monitoring from "../images/Logo3.png";

import "./styles/Services.css";

const Services = () => {
  return (
    <div className="container">
      <div className="slidefive">
        <h1>Services</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",
        }}>
        <CardBlock2 title={"Heating Solutions"} image={research} />
        <CardBlock2 title={"Solar Solutions"} image={Installation} />
        <CardBlock2 title={"Battery Solutions"} image={Monitoring} />
      </div>
    </div>
  );
};

export default Services;
