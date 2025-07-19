import CamperInfoHeader from "./CamperInfoHeader/CamperInfoHeader";
import CamperGallery from "../CamperGallery/CamperGallery";
import css from "./CamperInfo.module.css";

const CamperInfo = ({ camper }) => {
  return (
    <section className={css.infoSection}>
      <CamperInfoHeader camper={camper} />
      <CamperGallery gallery={camper.gallery} />
      <p className={css.description}>{camper.description}</p>
    </section>
  );
};

export default CamperInfo;
