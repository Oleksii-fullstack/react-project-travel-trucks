import { FaStar } from "react-icons/fa";
import { ImMap2 } from "react-icons/im";
import css from "./CamperInfoHeader.module.css";

const CamperInfoHeader = () => {
  return (
    <div className={css.headerBox}>
      <h2 className={css.headerTitle}>Mavericks</h2>
      <div className={css.underTitleBox}>
        <div className={css.ratingRow}>
          <FaStar className={css.iconStar} />
          <span className={css.ratingSpan}>4.2(10 Reviews)</span>
        </div>
        <div className={css.locationRow}>
          <ImMap2 className={css.iconMap} />
          <span className={css.locationSpan}>Kyiv, Ukraine</span>
        </div>
      </div>
      <span className={css.headerPrice}>€8000.00</span>
    </div>
  );
};

export default CamperInfoHeader;
