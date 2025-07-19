import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/favorites/slice";
import { featureMap } from "../../utils/featureMap";
import { FaStar } from "react-icons/fa6";
import { BsSuitHeart } from "react-icons/bs";
import { ImMap2 } from "react-icons/im";
import toast from "react-hot-toast";
import css from "./CamperCard.module.css";

const CamperCard = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFav = favorites.includes(props.id);

  const handleClick = () => {
    navigate(`/catalog/${props.id}`);
  };

  const handleFavClick = () => {
    dispatch(toggleFavorite(props.id));
    toast(isFav ? "Removed from favourites!" : "Added to favourites!", {
      icon: isFav ? "💔" : "❤️",
      style: { background: "#fff", color: "#222" },
    });
  };

  const MAX_FEATURES = 8;

  const features = Object.entries(featureMap)
    .filter(([key, cfg]) => cfg.condition(props[key]))
    .map(([key, cfg]) => ({
      Icon: cfg.icon,
      label:
        typeof cfg.label === "function" ? cfg.label(props[key]) : cfg.label,
      key,
    }));

  const displayedFeatures = features.slice(0, MAX_FEATURES);
  const hasMore = features.length > MAX_FEATURES;

  return (
    <div className={css.card}>
      <img
        src={props.gallery?.[0]?.thumb || "/src/assets/noimage.jpg"}
        alt={props.name}
        className={css.image}
      />
      <div className={css.info}>
        <div className={css.headerBox}>
          <div className={css.headerRow}>
            <h2 className={css.title}>{props.name}</h2>
            <span className={css.price}>€{props.price}.00</span>
            <BsSuitHeart
              className={`${css.iconHeart} ${isFav ? css.favActive : ""}`}
              onClick={handleFavClick}
              tabIndex={0}
              title={isFav ? "Remove from favorites" : "Add to favorites"}
              aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className={css.afterHeaderRow}>
            <div className={css.ratingRow}>
              <FaStar className={css.iconStar} />
              <span className={css.ratingSpan}>
                {props.rating}({props.reviews?.length || 0} Reviews)
              </span>
            </div>
            <div className={css.locationRow}>
              <ImMap2 className={css.iconMap} />
              <span className={css.locationSpan}>{props.location}</span>
            </div>
          </div>
        </div>

        <p className={css.description}>{props.description}</p>
        <div className={css.featuresRow}>
          {displayedFeatures.map(({ Icon, label, key }) => (
            <span key={key} className={css.featuresBox}>
              <Icon className={css.iconFeatures} />
              <span className={css.featuresText}>{label}</span>
            </span>
          ))}
          {hasMore && (
            <span
              className={css.featuresBox}
              style={{ fontWeight: 700, fontSize: 20 }}
            >
              ...
            </span>
          )}
        </div>
        <button className={css.showMoreBtn} type="button" onClick={handleClick}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
