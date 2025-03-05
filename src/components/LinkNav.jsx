// import { NavLink } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/style.css";
import {
  Home as HomeIcon,
  Group as GroupIcon,
  Groups3 as Groups3Icon,
} from "@mui/icons-material";

const LinkNav = () => {
  return (
    <nav>
      <ul className="centerIcon-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <HomeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <GroupIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/group"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Groups3Icon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LinkNav
