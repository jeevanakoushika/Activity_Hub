import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "../components/css/navbar.css";
import logo from '../Assets/images/logo.png';
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false); // Close menu if width > 768
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev); // Toggle the menu state
  };

  // Function to close the menu when a nav link is clicked
  const closeMenuHandler = () => {
    setMenuOpen(false); // Close the sidebar when a nav item is clicked
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content__logo">
          <Link to="/"><img src={logo} alt="Logo"/></Link>
        </div>

        <nav className={`header__content__nav ${menuOpen ? "isMenu" : ""}`}>
          {/* Menu Items */}
          <ul className="nav_menu">
            <li>
              <Link to="/events" onClick={closeMenuHandler}>Events</Link>
            </li>
            <li>
              <Link to="/clubs" onClick={closeMenuHandler}>Clubs</Link>
            </li>
            <li>
              <Link to="/sports" onClick={closeMenuHandler}>Sports</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenuHandler}>Contact</Link>
            </li>
            <Link to="signin/"><button className="btn btn__login" onClick={closeMenuHandler} >Login</button></Link>
            <Link to="/signup"><button className="btn btn_register" onClick={closeMenuHandler}>Register</button></Link>
          </ul>
          
          {/* Close button inside the menu when it’s open */}
          {menuOpen && (
            <div
              className="header__content__toggle header__content__toggle--close"
              onClick={menuToggleHandler}
            >
              <AiOutlineClose />
            </div>
          )}
        </nav>

        {/* Menu toggle button for opening (only visible when menu is closed) */}
        {!menuOpen && (
          <div className="header__content__toggle" onClick={menuToggleHandler}>
            <BiMenuAltRight />
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
