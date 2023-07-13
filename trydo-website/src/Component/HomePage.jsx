import React from "react";
import asset22 from "../Images/asset 22.jpeg";
import asset0 from "../Images/asset 0.png";
import { Link } from "react-router-dom";
import { Button } from "antd";
import asset1 from "../Images/asset 1.png";
import asset2 from "../Images/asset 2.png";
import asset3 from "../Images/asset 3.png";
import HomeAbout from "./HomeAbout";
import HomeService from "./HomeService";

const HomePage = () => {
  return (
    <div>
      <div className="background-image">
        <img src={asset22} alt="background" width="1799px" height="1250px" />
      </div>
      <div className="header">
        <div className="trydo-logo">
          <img src={asset0} alt="trydo" />
        </div>
        <div className="header-list">
          <ul className="header-ul">
            <li className="list">
              <Link className="link">Home</Link>
            </li>
            <li className="list">
              <Link className="link">Service</Link>
            </li>
            <li className="list">
              <Link className="link">About</Link>
            </li>
            <li className="list">
              <Link className="link">Pages</Link>
            </li>
            <li className="list">
              <Link className="link">Blocks</Link>
            </li>
            <li className="list">
              <Link className="link">Contact</Link>
            </li>
          </ul>
          <Button className="buy-now-btn">BUY NOW</Button>
        </div>
      </div>
      <div>
        <p className="digital-agency-text">
          A DIGITAL
          <br /> AGENCY.
        </p>
      </div>
      <div className="three-box-flex">
        <div className="star-box">
          <img src={asset1} alt="star-box" />
          <p className="Business-Stratagy">Business Stratagy</p>
          <p className="star-box-paragraph">
            There are many variations of passages of
            <br /> Lorem Ipsum available, but the majority
            <br /> have suffered.
          </p>
        </div>
        <div className="star-box">
          <img src={asset2} alt="star-box" />
          <p className="Business-Stratagy">Website Development</p>
          <p className="star-box-paragraph">
            There are many variations of passages of
            <br /> Lorem Ipsum available, but the majority
            <br /> have suffered.
          </p>
        </div>
        <div className="star-box">
          <img src={asset3} alt="star-box" />
          <p className="Business-Stratagy">Marketing & Reporting</p>
          <p className="star-box-paragraph">
            There are many variations of passages of
            <br /> Lorem Ipsum available, but the majority
            <br /> have suffered.
          </p>
        </div>
      </div>
      <HomeAbout />
      <HomeService />
    </div>
  );
};

export default HomePage;
