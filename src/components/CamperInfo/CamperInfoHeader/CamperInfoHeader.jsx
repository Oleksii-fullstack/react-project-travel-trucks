import { FaStar } from "react-icons/fa";
import { ImMap2 } from "react-icons/im";
import css from "./CamperInfoHeader.module.css";

const CamperInfoHeader = ({ camper }) => {
  return (
    <div className={css.headerBox}>
      <h2 className={css.headerTitle}>{camper.name}</h2>
      <div className={css.underTitleBox}>
        <div className={css.ratingRow}>
          <FaStar className={css.iconStar} />
          <span className={css.ratingSpan}>
            {camper.rating}({camper.reviews?.length || 0} Reviews)
          </span>
        </div>
        <div className={css.locationRow}>
          <ImMap2 className={css.iconMap} />
          <span className={css.locationSpan}>{camper.location}</span>
        </div>
      </div>
      <span className={css.headerPrice}>€{camper.price}.00</span>
    </div>
  );
};

export default CamperInfoHeader;
