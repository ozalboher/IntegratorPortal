import React from "react";
import { CircleMenu } from "../../Components/CircleMenu/CircleMenu";
import "./HomePage.css";

export const HomePage = () => {

  const menuItems = [
    { label: "תוכנות", link: "/search" },
    { label: "הדרכות", link: "/profile" },
    { label: "ניסויים", link: "/settings" },
    { label: "פרויקטים", link: "/projects" },
];

  return (
    <>
      <div className="HomePage">
      <CircleMenu items={menuItems}/>
      </div>
    </>
  );
};
