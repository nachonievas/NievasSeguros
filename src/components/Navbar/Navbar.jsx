import { useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo/logo1.png";

export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img src={logo} className="navbar_logo" alt="logo_1" />
      <nav ref={navRef}>
        <a href="!#">Home</a>
        <a href="!#">Nosotros</a>
        <a href="!#">Contacto</a>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
