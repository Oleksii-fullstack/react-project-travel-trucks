import css from "./FeaturesVehicleDetails.module.css";

const details = [
  { label: "Form", value: "Panel truck" },
  { label: "Length", value: "5.4 m" },
  { label: "Width", value: "2.01 m" },
  { label: "Height", value: "2.05 m" },
  { label: "Tank", value: "132 l" },
  { label: "Consumption", value: "12.4 l/100km" },
];

const FeaturesVehicleDetails = () => (
  <div className={css.detailsWrapper}>
    <p className={css.title}>Vehicle details</p>
    <div className={css.divider}></div>
    <div className={css.detailsList}>
      {details.map(({ label, value }) => (
        <div className={css.detailRow} key={label}>
          <span className={css.detailLabel}>{label}</span>
          <span className={css.detailValue}>{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesVehicleDetails;
