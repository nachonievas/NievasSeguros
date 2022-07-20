import React, { useRef } from "react";
import "./PresentationSection.css";
import carSrc from "../../assets/images/carAnimation/car.png";
import wheelSrc from "../../assets/images/carAnimation/wheel.png";
import umbrellaSrc from "../../assets/images/carAnimation/umbrella.png";

export const PresentationSection = () => {
  const carRef = useRef(null);
  const titleRef = useRef(null);

  // Check if the car img and title img are loaded in the DOM, when the component renders
  // if they are, take the x left position of the car img and check if it
  // is equal to the x left position of the title element
  // if so, add the .reveal-left class to the title html element
  // if not, check again in the next frame until the condition is met

  const checkIfRevealLeft = () => {
    if (carRef.current && titleRef.current) {
      const carLeft = Math.abs(
        Math.floor(carRef.current.getBoundingClientRect().left + 50)
      );

      const titleLeft = Math.abs(
        Math.floor(titleRef.current.getBoundingClientRect().left)
      );

      if (titleLeft - carLeft < 3) {
        titleRef.current.classList.add("reveal-left");
      } else {
        requestAnimationFrame(checkIfRevealLeft);
      }
    }
  };

  requestAnimationFrame(checkIfRevealLeft);

  return (
    <section className="full-section">
      <div className="presentation-section">
        <div className="presentation-section__car-content">
          <div ref={carRef} className="presentation-section__car">
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
          <h1
            ref={titleRef}
            className="presentation-section__title text-shadow"
            id="title"
          >
            <p>GRUPO</p>
            <p>NIEVAS</p>
            <p className="presentation-section__subtitle">
              Agencia Digital de Seguros
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};
