import React from "react";
import { Button } from "antd";

const HeaderPage = () => {
  return (
    <div>
      <div>
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202007/1308/1mclxb54zZCCo2YsVDGV5zsy.jpg"
          alt="background"
          width="100%"
        />
            <div className="trydo-logo">
              <img
                src="https://trydo.rainbowit.net/assets/images/logo/logo.png"
                alt="trydo"
                className="trydo-image"
              />
            </div>
          <div className="header-routes">
              <a href="#home">Home</a>
              <a href="#service">Service</a>
              <a href="#about">About</a>
              <a href="#pages">Pages</a>
              <a href="#blocks">Blocks</a>
              <a href="#contact">Contact</a>
              <Button className="buy-now-btn">BUY NOW</Button>
          </div>
      </div>
    </div>
  );
};

export default HeaderPage;
