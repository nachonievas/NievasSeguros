import React from "react";
import "./PresentationSection.css";
import carSrc from "../../assets/images/carAnimation/car.png";
import wheelSrc from "../../assets/images/carAnimation/wheel.png";
import umbrellaSrc from "../../assets/images/carAnimation/umbrella.png";

export const PresentationSection = () => {
  return (
    <section className="full-section">
      <div className="presentation-section">
        <div className="presentation-section__car-content">
          <div className="presentation-section__car">
            <img
              src={umbrellaSrc}
              className="presentation-section__umbrella-img"
              alt="umbrella"
            />
            <img
              src={carSrc}
              className="presentation-section__car-img"
              alt="car"
            />
            <img
              src={carSrc}
              className="presentation-section__car-img"
              alt="car"
            />
            <img
              src={wheelSrc}
              className="presentation-section__wheel-img presentation-section__wheel-img-left"
              alt="wheel_1"
            />
            <img
              src={wheelSrc}
              className="presentation-section__wheel-img presentation-section__wheel-img-right"
              alt="wheel_2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
