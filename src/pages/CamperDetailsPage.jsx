import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import CamperInfo from "../components/CamperInfo/CamperInfo";
import { useEffect } from "react";
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
      <ul className={css.tabs}>
        <li>
          <NavLink to="features" className={css.tabLink}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={css.tabLink}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default CamperDetailsPage;
