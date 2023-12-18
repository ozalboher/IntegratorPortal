import React from "react";
import { CircleMenu } from "../../Components/CircleMenu/CircleMenu";
import "./HomePage.css";

export const HomePage = () => {

  const menuItems = [
    { label: "ECU", link: "/search" },
    { label: "Umbilical", link: "/profile" },
    { label: "Harnesses", link: "/project-select" },
    { label: "Connectors", link: "/connectors" },
];

  return (
    <>
      <div className="HomePage">
      <CircleMenu items={menuItems}/>
      </div>
    </>
  );
};
