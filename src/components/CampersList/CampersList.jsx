import CamperCard from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";

const CampersList = ({ campers, isLoading, error }) => {
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && campers.length === 0 && (
        <div className={css.emptyResult}>
          <p>
            Нічого не знайдено за вашими критеріями. Спробуйте змінити
            характеристики пошуку
          </p>
        </div>
      )}
      {campers.length > 0 && (
        <ul className={css.list}>
          {campers.map((camper) => (
            <li key={camper.id}>
              <CamperCard {...camper} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CampersList;
