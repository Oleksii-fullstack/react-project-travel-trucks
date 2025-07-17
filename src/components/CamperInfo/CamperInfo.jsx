import CamperInfoHeader from "./CamperInfoHeader/CamperInfoHeader";
import CamperGallery from "../CamperGallery/CamperGallery";
import css from "./CamperInfo.module.css";

const CamperInfo = () => {
  return (
    <section className={css.infoSection}>
      <CamperInfoHeader />
      <CamperGallery />
      <p className={css.description}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.
      </p>
    </section>
  );
};

export default CamperInfo;
