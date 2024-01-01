import React from "react";
import { useState } from "react";
import { CircleMenu } from "../../Components/CircleMenu/CircleMenu";
import { Link, useParams } from "react-router-dom"; // Import Link from React Router
import './ProjectSelect.css';

export const ProjectSelect = (props) => {

  
  const backBtn = true; 
  const menuItems = [
      { label: "Reccelite XR", link: "/xr-workstations" },
      { label: "Litening", link: "/litening-workstations" },
      { label: "Blue Bird", link: "/bb-workstations" },
      { label: "Hydra", link: "/hydra-workstations" },
  ];
  
    return (
      <>
       <CircleMenu items={menuItems} backBtn={backBtn}/>
      </>
    );
};
