import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="/">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="/">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa fa-facebook"></i>
        </a>
      </div>
      <div className="copyright">
        Copyright @2019 White Panda Media Pvt Ltd <br /> All Rights Reserved
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
