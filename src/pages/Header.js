import React from "react";
import "./styles/Header.css";
import sideImage from "../images/solar.png";

const Header = () => {
  return (
    <>
      <div className="headerBox">
        <div className="inner">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  Maximize Energy Savings, <span>Minimize Impact!</span>
                </h1>
              </div>
              <div className="col-md-6">
                <img src={sideImage} width={"90%"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
