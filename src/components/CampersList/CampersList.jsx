import CamperCard from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";

const CampersList = () => {
  return (
    <ul className={css.list}>
      <CamperCard />
      <CamperCard />
      <CamperCard />
      <CamperCard />
    </ul>
  );
};

export default CampersList;
