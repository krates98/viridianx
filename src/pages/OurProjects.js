import React from "react";
import "./styles/OurProjects.css";

import DatamapsIndia from "react-datamaps-india";

const Vision = (props) => {
  return (
    <div className="background">
      <div className="container">
        <div className="visionTitle">
          <h1>Our Projects</h1>
        </div>
        <div className="row">
          <div className="col card indiaMap">
            <DatamapsIndia
              regionData={{
                Maharashtra: {
                  value: 10,
                },
              }}
              hoverComponent={({ value }) => {
                return (
                  <>
                    <p>{value.name}</p>
                    <p>{value.value}</p>
                  </>
                );
              }}
              mapLayout={{
                legendTitle: "Solar Installations",
                startColor: "#99b09f",
                endColor: "#298a40",
                hoverTitle: "Count",
                noDataColor: "#f5f5f5",
                borderColor: "#8D8D8D",
                hoverBorderColor: "#8D8D8D",
                hoverColor: "green",
              }}
            />
          </div>
          <div className="col projectside">
            <h4>Love thy project</h4>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium et accusamus tenetur maiores facilis, maxime, neque
              enim totam dolorum blanditiis cumque aperiam quasi, fugiat fuga
              quo magnam debitis possimus nesciunt.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium et accusamus tenetur maiores facilis, maxime, neque
              enim totam dolorum blanditiis cumque aperiam quasi, fugiat fuga
              quo magnam debitis possimus nesciunt.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium et accusamus tenetur maiores facilis, maxime, neque
              enim totam dolorum blanditiis cumque aperiam quasi, fugiat fuga
              quo magnam debitis possimus nesciunt.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium et accusamus tenetur maiores facilis, maxime, neque
              enim totam dolorum blanditiis cumque aperiam quasi, fugiat fuga
              quo magnam debitis possimus nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
