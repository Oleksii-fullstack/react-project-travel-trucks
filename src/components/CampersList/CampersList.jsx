import CamperCard from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";

const CampersList = ({ campers, isLoading, error }) => {
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard {...camper} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CampersList;
