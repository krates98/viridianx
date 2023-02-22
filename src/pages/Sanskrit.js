import React from "react";

import "./styles/Sanskrit.css";

const Sanskrit = () => {
  return (
    <div className="container text-center">
      <div className="slidefive">
        <h1>Our Values</h1>
      </div>
      <h4>सत्यं वद धर्मं चर स्वाध्यायान्मा प्रमदः ।</h4>

      <div class="row">
        <div class="col">
          <div class="card sanskritCard">
            <div class="card-body">
              <h5 class="card-title">Truthful</h5>

              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card sanskritCard">
            <div class="card-body">
              <h5 class="card-title">Honest</h5>

              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card sanskritCard">
            <div class="card-body">
              <h5 class="card-title">Best Service</h5>

              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card sanskritCard">
            <div class="card-body">
              <h5 class="card-title">Relations</h5>

              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sanskrit;
