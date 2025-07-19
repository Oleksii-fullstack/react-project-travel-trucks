import css from "./FeaturesVehicleDetails.module.css";

const labelMap = {
  form: "Form",
  length: "Length",
  width: "Width",
  height: "Height",
  tank: "Tank",
  consumption: "Consumption",
};

const FeaturesVehicleDetails = ({ camper }) => {
  if (!camper) return null;

  const details = [
    { label: labelMap.form, value: camper.form },
    {
      label: labelMap.length,
      value: camper.length ? `${camper.length} m` : null,
    },
    { label: labelMap.width, value: camper.width ? `${camper.width} m` : null },
    {
      label: labelMap.height,
      value: camper.height ? `${camper.height} m` : null,
    },
    { label: labelMap.tank, value: camper.tank ? `${camper.tank} l` : null },
    {
      label: labelMap.consumption,
      value: camper.consumption ? `${camper.consumption} l/100km` : null,
    },
  ].filter((d) => d.value);

  return (
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
};

export default FeaturesVehicleDetails;
