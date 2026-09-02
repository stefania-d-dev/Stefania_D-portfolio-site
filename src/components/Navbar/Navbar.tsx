/* eslint-disable @typescript-eslint/comma-dangle */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Background/FE logo.png";
import "./NavbarStyles.css";

// Definizione delle rotte
const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contact",
};

// Elementi del menu
const MENU_ITEMS = [
  { route: ROUTES.HOME, label: "Home" },
  { route: ROUTES.ABOUT, label: "About" },
  { route: ROUTES.PROJECTS, label: "Projects" },
  { route: ROUTES.CONTACT, label: "Contact" },
];

const Navbar = () => {
  // Stato per gestire l'apertura e la chiusura del menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  // Stato per gestire la visibilità della navbar in base allo scrolling
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  // Gestione del click sul menu
  const handleMenuClick = () => setMenuOpen(!isMenuOpen);

  // Gestione dello scrolling della pagina per mostrare/nascondere la navbar
  const handleScroll = () => {
    setNavbarVisible(window.scrollY <= 200);
  };

  useEffect(() => {
    // Aggiunta dell'event listener per lo scrolling
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Rimozione dell'event listener quando il componente viene smontato
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav${isNavbarVisible ? "" : " nav-hidden"}`}>
      <div className="header">
        {/* Logo */}
        <Link to={ROUTES.HOME}>
          <img className="logo" src={logo} alt="SD_logo" />
        </Link>
        {/* Menu */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              <Link to={item.route} className="menu-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Icona per aprire/chidere il menu */}
        <div className="barsMenu" onClick={handleMenuClick}>
          {isMenuOpen ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
