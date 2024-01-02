import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { BackIcon } from "../../Assets/BackIcon";
import { MenuIcon } from "../../Assets/MenuIcon";
import "./CircleMenu.css";

export const CircleMenu = ({items, backBtn}) => {
  const [isOpen, setIsOpen] = useState(true);
  let destinationLink = '';
  const toggleMenu = () => {
    if (!backBtn) setIsOpen(!isOpen);
    else {
      window.history.back();
    }
  };
  const test = (x) => {
    destinationLink = x;
    console.log(destinationLink);
  }

  return (
    <div className="page-content-center">
    <div className="circle-menu-container">
      <button className="circle-menu-button" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}>{backBtn ? <BackIcon/>: <MenuIcon/>}</i>
      </button>
      <div className={`circle-menu ${isOpen ? "open" : ""}`}>
        {items.map((item, index) => (
          <Link key={index} to={{ pathname: item.link /* + "/" + item.label */}}>
            
            <button onClick={() => test(item.label)}
              className="circle-menu-item"
              style={{
                transform: `rotate(${2.5}deg) translate(50px)`,
              }}
            >
              <span className={`menu-label ${isOpen ? "show" : ""}`}>
                {item.label}
              </span>
            </button>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

