import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
      >
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
