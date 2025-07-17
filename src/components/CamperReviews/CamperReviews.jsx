import { FaStar } from "react-icons/fa6";
import css from "./CamperReviews.module.css";
import BookingForm from "../BookingForm/BookingForm";

const reviews = [
  {
    name: "Alice",
    rating: 5,
    text: "The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic.",
  },
  {
    name: "Bob",
    rating: 3,
    text: "A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.",
  },
];

const CamperReviews = () => {
  return (
    <div className={css.reviewsWrapper}>
      <div className={css.reviewsBox}>
        {reviews.map(({ name, rating, text }, idx) => (
          <div className={css.reviewItem} key={idx}>
            <div className={css.topRow}>
              <span className={css.avatar}>{name.charAt(0).toUpperCase()}</span>
              <div className={css.userInfo}>
                <span className={css.userName}>{name}</span>
                <div className={css.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      style={{ color: i < rating ? "#ffc531" : "#d9d9d9" }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={css.reviewText}>{text}</p>
          </div>
        ))}
      </div>
      <BookingForm />
    </div>
  );
};

export default CamperReviews;
