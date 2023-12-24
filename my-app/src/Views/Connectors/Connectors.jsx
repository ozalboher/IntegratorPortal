import React from "react";
import { useState } from "react";
import { CircleMenu } from "../../Components/CircleMenu/CircleMenu";
import { Link } from "react-router-dom"; 
import './Connectors.css';

export const Connectors = () => {

  const backBtn = true; 
  const menuItems = [
      { label: "Reccelite XR", link: "/search" },
      { label: "Litening", link: "/profile" },
      { label: "Blue Bird", link: "/profile" },
      { label: "Hydra", link: "/profile" },
  ];



  
  return (
    <CircleMenu items={menuItems} backBtn={backBtn}/>
  );
};