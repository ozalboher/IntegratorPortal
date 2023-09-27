import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./CircleMenu.css";

export const CircleMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: "fa-home", label: "Home", link: "/home" },
    { icon: "fa-search", label: "Search", link: "/search" },
    { icon: "fa-user", label: "Profile", link: "/profile" },
    { icon: "fa-cog", label: "Settings", link: "/settings" },
    { icon: "fa-cog", label: "Settings", link: "/settings" },

  ];

  const itemAngle = 3; // Ensure a maximum of 8 items

  return (
    <div className="circle-menu-container">
      <button className="circle-menu-button" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}>Menu</i>
      </button>
      <div className={`circle-menu ${isOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.link}>
            {/* Wrap the button with Link */}
            <button
              className="circle-menu-item"
              style={{
                transform: `rotate(${2.5}deg) translate(50px)`,
              }}
            >
              <i className={`fas ${item.icon}`}></i>
              <span className={`menu-label ${isOpen ? "show" : ""}`}>
                {item.label}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
