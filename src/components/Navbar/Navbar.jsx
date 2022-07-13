import { useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>logo</h3>
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
