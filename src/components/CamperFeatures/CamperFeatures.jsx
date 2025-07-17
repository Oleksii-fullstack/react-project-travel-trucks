import BookingForm from "../BookingForm/BookingForm";
import FeaturesEquipmentIcons from "../FeaturesEquipmentIcons/FeaturesEquipmentIcons";
import FeaturesVehicleDetails from "../FeaturesVehicleDetails/FeaturesVehicleDetails";
import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  return (
    <div className={css.featuresWrapper}>
      <div className={css.featuresBox}>
        <FeaturesEquipmentIcons />
        <FeaturesVehicleDetails />
      </div>
      <BookingForm />
    </div>
  );
};

export default CamperFeatures;
