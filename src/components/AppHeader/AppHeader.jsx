import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Navigation from "../Navigation/Navigation";
import css from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={css.wrapper}>
      <div className={css.left}>
        <Link to="/">
          <img src={logo} className={css.logo} alt="logo Travel Trucks" />
        </Link>
      </div>

      <Navigation />

      <div className={css.right}></div>
    </header>
  );
};

export default AppHeader;
