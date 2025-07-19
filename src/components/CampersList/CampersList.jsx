import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";

const CampersList = ({ campers, isLoading, error, hasRequested, notFound }) => {
  useEffect(() => {
    // Показуємо тост тільки якщо точно "нічого не знайдено" (notFound)
    if (!isLoading && notFound && hasRequested) {
      toast("Nothing found by your search. Try to change searching request.", {
        icon: "🚫",
        id: "not-found-toast",
      });
    } else if (error && !isLoading) {
      // Інші помилки — як помилки
      toast.error(error, { id: "error-toast" });
    }
  }, [isLoading, error, campers.length, hasRequested, notFound]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && error && <div>{error}</div>}
      {!isLoading && !error && notFound && hasRequested && (
        <p>Nothing found by your search. Try to change searching request.</p>
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
