import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import CamperInfo from "../components/CamperInfo/CamperInfo";
import clsx from "clsx";
import css from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/catalog/${id}`) {
      navigate(`features`, { replace: true });
    }
  }, [id, location.pathname, navigate]);

  return (
    <div className={css.detailsWrapper}>
      <CamperInfo />
      <div className={css.tabsSection}>
        <div className={css.tabsWrapper}>
          <ul className={css.tabs}>
            <li>
              <NavLink
                to="features"
                className={({ isActive }) => {
                  return clsx(css.tabLink, isActive && css.tabLinkActive);
                }}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) => {
                  return clsx(css.tabLink, isActive && css.tabLinkActive);
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CamperDetailsPage;
