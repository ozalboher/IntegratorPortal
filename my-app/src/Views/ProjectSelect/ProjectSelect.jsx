import React from "react";
import { useState } from "react";
import { CircleMenu } from "../../Components/CircleMenu/CircleMenu";
import { Link, useParams } from "react-router-dom"; // Import Link from React Router
import './ProjectSelect.css';

export const ProjectSelect = (props) => {
  const { id } = useParams(); // Get the ID from the URL (Harnesses, ECU, etc.)
  console.log(id);
  
  const backBtn = true; 
  const menuItems = [
      { label: "Reccelite XR", link: "/profile" },
      { label: "Litening", link: "/Litening/:id" },
      { label: "Blue Bird", link: "/Blue Bird/:id" },
      { label: "Hydra", link: "/Hydra/:id" },
  ];
  
    return (
      <>
       <CircleMenu items={menuItems} backBtn={backBtn}/>
      </>
    );
};
