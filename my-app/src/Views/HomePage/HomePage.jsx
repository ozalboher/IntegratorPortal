import React from "react";
import { CircleMenu } from "../../Components/CircleMenu/CircleMenu";
import "./HomePage.css";

export const HomePage = () => {

  const menuItems = [
    { label: "ECU", link: "/project-select" },
    { label: "Umbilical", link: "/project-select" },
    { label: "Harnesses", link: "/project-select" },
    { label: "Connectors", link: "/project-select" },
];

  return (
    <>
      <div className="HomePage">
      <CircleMenu items={menuItems}/>
      </div>
    </>
  );
};
