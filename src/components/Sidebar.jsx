import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../App.css";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "dashboard",
      icon: <MdDashboardCustomize />,
    },
    {
      path: "/venue",
      name: "venue",
      icons: <MdPlace />,
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <AiOutlineBars />
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              {item.icons}
              <div className="link_text">{item.name}</div>
            </NavLink>
          );
        })}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
