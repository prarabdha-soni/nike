import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, LinkedIn, GitHub } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="bottomNav">
      <div className="bottomNavLinks">
        <NavLink to="#">ABOUT</NavLink>
        <NavLink to="#">FAQ</NavLink>
        <NavLink to="#">CONTACT</NavLink>
        <NavLink to="#">PRIVACY POLICY</NavLink>
        <NavLink to="#">TERMS & CONDITIONS</NavLink>
      </div>
      <p class="bottomNavText">
        <a href="#" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://linkedin.com/in/prarabdha-soni"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <br />
        <br /> © {new Date().getFullYear()} Built by{" "}
        <a href="https://prarabdha-soni.github.io/portfolio/" target="_blank" rel="noreferrer">
          &nbsp;<span id="me">Prarabdha Soni</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
