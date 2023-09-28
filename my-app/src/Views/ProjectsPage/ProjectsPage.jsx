import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import './ProjectsPage.css';

export const ProjectsPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
      { icon: "fa-search", label: "Reccelite XR", link: "/search" },
      { icon: "fa-user", label: "Litening", link: "/profile" },
      { icon: "fa-user", label: "Blue Bird", link: "/profile" },
      { icon: "fa-user", label: "Hydra", link: "/profile" },

  ];


    return (
      <div className="page-content-center">
      <div className="circle-menu-container">
        <Link to={'/home'}>
      <button className="circle-menu-button">
        <i className={`fas`}>Back</i>
      </button>
        </Link>
      <div className={`circle-menu ${"open"}`}>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.link}>
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
    </div>
    );
};
