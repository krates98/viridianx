import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div class=" container">
        <div class="row">
          <div class="col-sm-6">
            <h5>Contact Us</h5>
            <p>Phone: 944-808-1297</p>
            <p>Email: hello@viridianx.com</p>
            <div class="social-media-icons">
              <a href="#">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-12">
                <h5 class="">Address</h5>
                <p>
                  No. 106- A, Allied House, Inderlok, New Delhi- 110035, Delhi,
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
