import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { ImMap2 } from "react-icons/im";
import { BsSuitHeart, BsDiagram3, BsFuelPump, BsCupHot } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import css from "./CamperCard.module.css";

const CamperCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog/:id");
  };

  return (
    <div className={css.card}>
      <img
        src="/src/assets/camper.jpg"
        alt="camper truck image"
        className={css.image}
      />
      <div className={css.info}>
        <div className={css.headerBox}>
          <div className={css.headerRow}>
            <h2 className={css.title}>Kuga Camper</h2>
            <span className={css.price}>€8000.00</span>
            <BsSuitHeart className={css.iconHeart} />
          </div>

          <div className={css.afterHeaderRow}>
            <div className={css.ratingRow}>
              <FaStar className={css.iconStar} />
              <span className={css.ratingSpan}>4.2(10 Reviews)</span>
            </div>
            <div className={css.locationRow}>
              <ImMap2 className={css.iconMap} />
              <span className={css.locationSpan}>Kyiv, Ukraine</span>
            </div>
          </div>
        </div>

        <p className={css.description}>
          The pictures shown here are example vehicles of the respective...
        </p>
        <div className={css.featuresRow}>
          <span className={css.featuresBox}>
            <BsDiagram3 className={css.iconFeatures} />
            <span className={css.featuresText}>Automatic</span>
          </span>
          <span className={css.featuresBox}>
            <BsFuelPump className={css.iconFeatures} />
            <span className={css.featuresText}>Petrol</span>
          </span>
          <span className={css.featuresBox}>
            <BsCupHot className={css.iconFeatures} />
            <span className={css.featuresText}>Kitchen</span>
          </span>
          <div className={css.featuresRowSecondary}>
            <span className={css.featuresBox}>
              <LuWind className={css.iconFeatures} />
              <span className={css.featuresText}>AC</span>
            </span>
          </div>
        </div>
        <button className={css.showMoreBtn} type="button" onClick={handleClick}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
