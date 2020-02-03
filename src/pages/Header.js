import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  return (
    <header>
      <div className="wrap-header" id="top">
        <button
          onClick={props.showMenu}
          className={props.toggle ? "show" : "hide"}
        >
          {props.toggle ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <nav className="menu">
          <ul className="list-menu">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About us
            </Link>

            <ul className="menu-list">
              MENU
              <Link
                activeClass="active"
                to="soups"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                First courses
              </Link>
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Main
              </Link>
              <Link
                activeClass="active"
                to="desserts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Desserts
              </Link>
            </ul>

            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Gallery
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </ul>
        </nav>
        <nav className="burger">
          <ul className={props.toggle ? "burger-menu" : "burger-menu-hide"}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About us
            </Link>

            <Link
              activeClass="active"
              to="soups"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              First courses
            </Link>
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Main
            </Link>
            <Link
              activeClass="active"
              to="desserts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Desserts
            </Link>

            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Gallery
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </ul>
        </nav>
        <h1>Fancy Food Restaurant</h1>
        <Link
          className="back"
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          TOP
        </Link>
      </div>
    </header>
  );
};

export default Header;
