import React from "react";
import header from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={header.header}>
      <div className={header.container}>
        <div className={header.wrapper}>
          <a
            className={header.logo}
            href="https://www.google.com/webhp?hl=ru&ictx=2&sa=X&ved=0ahUKEwjd4dqRx_bnAhUKi1wKHWDXDeAQPQgH"
          >
            Logo
          </a>

          <form className={header.search}>
            <input
              className={header.searchInput}
              type="search"
              placeholder="Поиск"
            ></input>
          </form>
          <div className={header.loginBlock}> {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
