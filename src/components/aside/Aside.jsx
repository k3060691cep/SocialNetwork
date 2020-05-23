import React from "react";
import aside from "./Aside.module.css";
import { NavLink } from "react-router-dom";

const Aside = props => {
  return (
    <div className={aside.aside}>
      <nav className={aside.navbar}>
        <ul>
          <li className={aside.li}>
            <NavLink to="/profile" className={aside.a}>
              profile
            </NavLink>
          </li>
          <li className={aside.li}>
            <NavLink to="/messenger" className={aside.a}>
              masseges
            </NavLink>
          </li>
          <li className={aside.li}>
            <NavLink to="users" className={aside.a}>
              users
            </NavLink>
          </li>
          <li className={aside.li}>
            <NavLink to="games" className={aside.a}>
              games
            </NavLink>
          </li>
          <li className={aside.li}>
            <a href="#" className={aside.a}>
              settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Aside;


