import React, { useState } from "react";
import BurgerButton from "./BurgerButton/BurgerButton";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="container-title-burger">
          <a href="#page-top">
            <i className="fa-solid fa-angle-left"></i>
            RS Web Dev
            <i className="fa-solid fa-angle-right"></i>
          </a>
          <BurgerButton isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div
          className={isActive ? "links-container active" : "links-container"}
        >
          <ul>
            <li className="nav-li">
              <a className="active" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-li">
              <a href="#about">About</a>
            </li>
            <li className="nav-li">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
