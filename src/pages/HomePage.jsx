import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={css.heroSection}>
      <div className={css.overlay} />
      <div className={css.content}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.subtitle}>
          You can find everything you want in our catalog
        </p>
        <button className={css.button} type="button" onClick={handleClick}>
          View Now
        </button>
      </div>
    </section>
  );
};

export default HomePage;
