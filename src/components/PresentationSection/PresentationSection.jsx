import React from "react";
import "./PresentationSection.css";
import carSrc from "../../assets/images/carAnimation/car.png";
import wheelSrc from "../../assets/images/carAnimation/wheel.png";
import umbrellaSrc from "../../assets/images/carAnimation/umbrella.png";

export const PresentationSection = () => {
  // Check if the car img and title img are loaded in the DOM, when the component renders
  // if they are, take the x left position of the car img and check if it
  // is equal to the x left position of the title element
  // if so, add the .reveal-left class to the title html element
  // if not, check again in the next frame until the condition is met

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
              id="car"
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
        <div className="presentation-section__title-content">
          <h1 className="presentation-section__title reveal-left" id="title">
            <p>GRUPO</p>
            <p>NIEVAS</p>
          </h1>
        </div>
      </div>
    </section>
  );
};
