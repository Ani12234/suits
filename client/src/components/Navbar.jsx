import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  position: fixed;
  top: -100px;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: top 0.5s ease-in-out;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;

    &:hover {
      color: #f39c12;
    }
  }
`;

const Navbar = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".navbar",
      { top: "-100px" }, // Start position
      {
        top: 0, // End position
        scrollTrigger: {
          trigger: "#home",
          start: "top top", // Start when #home reaches top of viewport
          end: "bottom top", // End when #home is out of view
          scrub: true, // Smooth transition
        },
      }
    );
  }, []);
  return (
    <NavbarContainer className="navbar">
      <Logo>SuitSpot</Logo>
      <NavLinks>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
        <a href="#home">Home</a>
        <a href="#features">Why Us</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
