import { BsGrid1X2, BsGrid3X3Gap } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import css from "./SidebarFilters.module.css";

const VEHICLE_TYPES = [
  { key: "Van", label: "Van", Icon: BsGrid1X2 },
  { key: "Fully Integrated", label: "Fully Integrated", Icon: CiGrid41 },
  { key: "Alcove", label: "Alcove", Icon: BsGrid3X3Gap },
];

const VehicleTypeFilterInputs = ({ value, onChange }) => (
  <div className={css.checkboxGroup}>
    {VEHICLE_TYPES.map(({ key, label, Icon }) => (
      <label key={key} className={css.checkboxTile}>
        <input
          type="radio"
          name="vehicleType"
          checked={value === key}
          onChange={() => onChange(key)}
        />
        <span className={css.checkboxBox}>
          <Icon className={css.icon} />
          <span className={css.text}>{label}</span>
        </span>
      </label>
    ))}
  </div>
);

export default VehicleTypeFilterInputs;
