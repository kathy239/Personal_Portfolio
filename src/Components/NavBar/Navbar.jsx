import "./Navbar.css";
import logo from "../../assets/img/logo.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const Navbar = () => {
  const [stickyBar, setStickyBar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setStickyBar(true) : setStickyBar(false);
    });
  }, []);

  return (
    <Container
      fluid
      className={`navbar-container ${stickyBar ? "dark-nav" : ""}`}
    >
      <nav className="d-flex align-items-center justify-content-between">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="d-flex align-items-center">
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about-us" smooth={true} offset={-150} duration={500}>
              About us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Button
              as={Link}
              variant="outline-info"
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
            >
              Contact us
            </Button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
