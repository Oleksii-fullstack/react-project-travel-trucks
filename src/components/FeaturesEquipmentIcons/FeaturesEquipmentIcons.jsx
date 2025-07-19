import { LuWind, LuMicrowave } from "react-icons/lu";
import { BsDiagram3, BsFuelPump, BsCupHot, BsUiRadios } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { PiShower } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";
import { GiGasStove } from "react-icons/gi";
import css from "./FeaturesEquipmentIcons.module.css";

const allFeatures = [
  {
    key: "transmission",
    isActive: (val) => !!val,
    icon: <BsDiagram3 />,
    label: (val) =>
      val ? `${val.charAt(0).toUpperCase()}${val.slice(1)}` : "Transmission",
  },
  {
    key: "engine",
    isActive: (val) => !!val,
    icon: <BsFuelPump />,
    label: (val) =>
      val ? `${val.charAt(0).toUpperCase()}${val.slice(1)}` : "Engine",
  },
  {
    key: "AC",
    isActive: (val) => !!val,
    icon: <LuWind />,
    label: () => "AC",
  },
  {
    key: "bathroom",
    isActive: (val) => !!val,
    icon: <PiShower />,
    label: () => "Bathroom",
  },
  {
    key: "kitchen",
    isActive: (val) => !!val,
    icon: <BsCupHot />,
    label: () => "Kitchen",
  },
  {
    key: "TV",
    isActive: (val) => !!val,
    icon: <HiOutlineTv />,
    label: (val) => (typeof val === "number" ? `TV ${val}ʺ` : "TV"),
  },
  {
    key: "radio",
    isActive: (val) => !!val,
    icon: <BsUiRadios />,
    label: () => "Radio",
  },
  {
    key: "refrigerator",
    isActive: (val) => !!val,
    icon: <TbFridge />,
    label: () => "Refrigerator",
  },
  {
    key: "microwave",
    isActive: (val) => !!val,
    icon: <LuMicrowave />,
    label: () => "Microwave",
  },
  {
    key: "gas",
    isActive: (val) => !!val,
    icon: <GiGasStove />,
    label: () => "Gas",
  },
  {
    key: "water",
    isActive: (val) => !!val,
    icon: <IoWaterOutline />,
    label: () => "Water",
  },
];

const FeaturesEquipmentIcons = ({ camper }) => {
  if (!camper) return null;

  // Фільтруємо ті, що активні для цього camper
  const featuresToShow = allFeatures
    .filter(({ key, isActive }) => isActive(camper[key]))
    .map(({ icon, label, key }) => ({
      icon,
      label: typeof label === "function" ? label(camper[key]) : label,
      key,
    }));

  return (
    <div className={css.iconsGroup}>
      {featuresToShow.map(({ icon, label, key }) => (
        <div className={css.iconTile} key={key}>
          <span className={css.icon}>{icon}</span>
          <span className={css.label}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturesEquipmentIcons;
