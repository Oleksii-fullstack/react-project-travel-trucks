import { useOutletContext } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";
import FeaturesEquipmentIcons from "../FeaturesEquipmentIcons/FeaturesEquipmentIcons";
import FeaturesVehicleDetails from "../FeaturesVehicleDetails/FeaturesVehicleDetails";
import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const { camper } = useOutletContext();
  return (
    <div className={css.featuresWrapper}>
      <div className={css.featuresBox}>
        <FeaturesEquipmentIcons camper={camper} />
        <FeaturesVehicleDetails camper={camper} />
      </div>
      <BookingForm />
    </div>
  );
};

export default CamperFeatures;
