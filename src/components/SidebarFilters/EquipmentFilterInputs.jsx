import { LuWind, LuMicrowave } from "react-icons/lu";
import { BsDiagram3, BsCupHot } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { PiShower } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { GiGasStove } from "react-icons/gi";
import css from "./SidebarFilters.module.css";

const EQUIPMENT_OPTIONS = [
  {
    key: "AC",
    label: "AC",
    icon: <LuWind className={css.icon} />,
  },
  {
    key: "microwave",
    label: "Microwave",
    icon: <LuMicrowave className={css.icon} />,
  },
  {
    key: "transmission-automatic",
    label: "Automatic",
    icon: <BsDiagram3 className={css.icon} />,
  },
  {
    key: "kitchen",
    label: "Kitchen",
    icon: <BsCupHot className={css.icon} />,
  },
  {
    key: "TV",
    label: "TV",
    icon: <HiOutlineTv className={css.icon} />,
  },
  {
    key: "bathroom",
    label: "Bathroom",
    icon: <PiShower className={css.icon} />,
  },
  {
    key: "refrigerator",
    label: "Fridge",
    icon: <TbFridge className={css.icon} />,
  },
  {
    key: "gas",
    label: "Gas",
    icon: <GiGasStove className={css.icon} />,
  },
];

const EquipmentFilterInputs = ({ value = [], onChange }) => {
  const handleChange = (checked, optionKey) => {
    if (checked) {
      onChange([...value, optionKey]);
    } else {
      onChange(value.filter((v) => v !== optionKey));
    }
  };

  return (
    <div className={css.checkboxGroup}>
      {EQUIPMENT_OPTIONS.map((opt) => (
        <label key={opt.key} className={css.checkboxTile}>
          <input
            type="checkbox"
            checked={value.includes(opt.key)}
            onChange={(e) => handleChange(e.target.checked, opt.key)}
            className={css.checkboxInput}
          />
          <span className={css.checkboxBox}>
            {opt.icon}
            <span className={css.text}>{opt.label}</span>
          </span>
        </label>
      ))}
    </div>
  );
};

export default EquipmentFilterInputs;
