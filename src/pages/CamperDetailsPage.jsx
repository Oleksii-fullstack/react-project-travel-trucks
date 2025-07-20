import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCamperByIdThunk } from "../redux/campers/operations";
import Loader from "../components/Loader/Loader";
import CamperInfo from "../components/CamperInfo/CamperInfo";
import clsx from "clsx";
import css from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);
  const camperFromCache = useSelector((state) => state.campers.cache[id]);
  const camperCurrent = useSelector((state) => state.campers.current);
  const camper = camperFromCache || camperCurrent;

  // Завантажити camper якщо нема в кеші або не той
  useEffect(() => {
    if (!camper || camper.id !== id) {
      dispatch(fetchCamperByIdThunk(id));
    }
    // Redirect на features-tab, якщо на /catalog/:id
    if (location.pathname === `/catalog/${id}`) {
      navigate("features", { replace: true });
    }
    // eslint-disable-next-line
  }, [id, location.pathname]);

  if (isLoading) return <Loader />;
  if (error) return <div className={css.error}>{error}</div>;
  if (!camper) return null; // Поки дані не отримані

  return (
    <div className={css.detailsWrapper}>
      <CamperInfo camper={camper} />
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
      <Outlet context={{ camper }} />
    </div>
  );
};

export default CamperDetailsPage;
