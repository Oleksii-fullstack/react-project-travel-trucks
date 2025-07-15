import { NavLink, Outlet } from "react-router-dom";

const CamperDetailsPage = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="features">Features</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default CamperDetailsPage;
