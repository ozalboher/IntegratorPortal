import React from "react";
import { CircleMenu } from "../../Components/CircleMenu/CircleMenu";
import "./HomePage.css";

export const HomePage = () => {

  const menuItems = [
    { label: "ציוד וחומרה", link: "/inventory-list" },
    { label: "מעקב עמדות", link: "/project-select" },
    { label: "משימות", link: "/project-select" },
];

  return (
    <>
      <div className="HomePage">
      <CircleMenu items={menuItems}/>
      </div>
    </>
  );
};
