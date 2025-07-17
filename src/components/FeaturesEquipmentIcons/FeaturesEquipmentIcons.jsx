import { BsDiagram3, BsFuelPump, BsCupHot, BsUiRadios } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import css from "./FeaturesEquipmentIcons.module.css";

const equipmentList = [
  { icon: <BsDiagram3 />, label: "Automatic" },
  { icon: <LuWind />, label: "AC" },
  { icon: <BsFuelPump />, label: "Petrol" },
  { icon: <BsCupHot />, label: "Kitchen" },
  { icon: <BsUiRadios />, label: "Radio" },
];

const FeaturesEquipmentIcons = () => {
  return (
    <div className={css.iconsGroup}>
      {equipmentList.map(({ icon, label }) => (
        <div className={css.iconTile} key={label}>
          <span className={css.icon}>{icon}</span>
          <span className={css.label}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturesEquipmentIcons;
