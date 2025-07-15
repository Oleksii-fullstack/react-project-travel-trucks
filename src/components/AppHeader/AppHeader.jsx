import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={css.wrapper}>
      <div className={css.left}>
        <Link to="/" className={css.link}>
          <span className={css.mainSpan}>Travel</span>
          <span className={css.span}>Trucks</span>
        </Link>
      </div>

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

      <div className={css.right}></div>
    </header>
  );
};

export default AppHeader;
