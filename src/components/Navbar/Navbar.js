import React, { useState } from "react";
import BurgerButton from "./BurgerButton/BurgerButton";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="container-title-burger">
          <a href='#Header'>
            <i className="fa-solid fa-angle-left"></i>
            RS Portfolio
            <i className="fa-solid fa-angle-right"></i>
          </a>
          <BurgerButton isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div
          className={isActive ? "links-container active" : "links-container"}
        >
          <ul>
            <li className="nav-li">
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="nav-li">
              <a href="#About">About</a>
            </li>
            <li className="nav-li">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
