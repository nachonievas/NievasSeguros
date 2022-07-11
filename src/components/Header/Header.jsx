import React from "react";
import citySrc from "../../assets/images/carAnimation/city.jpeg";
import carSrc from "../../assets/images/carAnimation/car.png";

export const Header = () => {
  return (
    <section className="section__padding section__margin">
      <div className="header">
        <img src={citySrc} className="header__city" alt="city" />
        <img src={carSrc} alt="car" />
      </div>
    </section>
  );
};
