import React from "react";
import "./Header.css";
import citySrc from "../../assets/images/carAnimation/city.jpeg";
import carSrc from "../../assets/images/carAnimation/car.png";
import wheelSrc from "../../assets/images/carAnimation/wheel.png";

export const Header = () => {
  return (
    <section className="full-section">
      <div className="header">
        <div
          className="header__city"
          style={{
            background: `url(${citySrc})`,
          }}
        >
          <div className="header__car">
            <img src={carSrc} className="header__car-img" alt="car" />
            <img
              src={wheelSrc}
              className="header__wheel-img header__wheel-img-left"
              alt="wheel_1"
            />
            <img
              src={wheelSrc}
              className="header__wheel-img header__wheel-img-right"
              alt="wheel_2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
