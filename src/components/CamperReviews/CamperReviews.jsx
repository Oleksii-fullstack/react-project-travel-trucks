import { useOutletContext } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import BookingForm from "../BookingForm/BookingForm";
import css from "./CamperReviews.module.css";

const CamperReviews = () => {
  const { camper } = useOutletContext();

  const reviews = camper?.reviews || [];

  return (
    <div className={css.reviewsWrapper}>
      <div className={css.reviewsBox}>
        {reviews.length > 0 ? (
          reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
            <div className={css.reviewItem} key={idx}>
              <div className={css.topRow}>
                <span className={css.avatar}>
                  {reviewer_name.charAt(0).toUpperCase()}
                </span>
                <div className={css.userInfo}>
                  <span className={css.userName}>{reviewer_name}</span>
                  <div className={css.stars}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        style={{
                          color: i < reviewer_rating ? "#ffc531" : "#d9d9d9",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.reviewText}>{comment}</p>
            </div>
          ))
        ) : (
          <div className={css.noReviews}>No reviews yet</div>
        )}
      </div>
      <BookingForm />
    </div>
  );
};

export default CamperReviews;
