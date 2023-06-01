import React, { useRef } from "react";
import {Link} from 'react-router-dom'
import "./style.scss";

import logo from "../../assets/icons/logo.png";
import darkLogo from "../../assets/icons/logo-dark.png";

import { BiSearch } from "react-icons/bi";
import { SlBag } from "react-icons/sl";
import { BiChevronDown } from "react-icons/bi";



const Nav = ({theme}) => {
  const menuIcon = useRef(".hamburger");
  const sideNav = useRef(".sidenav");
  
  const MenuClicked = () => {
    menuIcon.current.classList.toggle("x");
    sideNav.current.classList.toggle("active");
  };
  
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <img src={theme === "light" ? logo : darkLogo} alt="" />
        </Link>
        <ul>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <li>
            Category
            <BiChevronDown />
            <div className="sub-link">
              <ul className="subsubLink">
                <li>Men</li>
                <li>Women</li>
                <li>Child</li>
              </ul>
            </div>
          </li>
          <Link to="/about">
            <li>About</li>
          </Link>
          <BiSearch />
          <SlBag />
          <div ref={menuIcon} onClick={MenuClicked} className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </ul>
        <div ref={sideNav} className="sidenav">
          <li>Contact</li>
          <li>Products</li>
          <li> Category </li>
          <li>About</li>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
