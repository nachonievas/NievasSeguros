import React from "react";
import "./ContactFormSection.css";

export const ContactFormSection = () => {
  return (
    <section className="full-section contact-form-section">
      <h1>Contáctanos</h1>
      <form className="contact-form-section__form">
        <div className="contact-form-section__form-input-container">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" />
        </div>
        <div className="contact-form-section__form-input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="contact-form-section__form-input-container">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" />
        </div>
        <div className="contact-form-section__form-input-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};
