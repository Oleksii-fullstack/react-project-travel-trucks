import { FaGasPump } from "react-icons/fa6";
import { BsDiagram3, BsFuelPump, BsCupHot, BsUiRadios } from "react-icons/bs";
import { LuWind, LuMicrowave } from "react-icons/lu";
import { PiShower } from "react-icons/pi";
import { HiOutlineTv } from "react-icons/hi2";
import { TbFridge } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";

export const featureMap = {
  transmission: {
    icon: BsDiagram3,
    label: (value) => (value === "automatic" ? "Automatic" : "Manual"),
    condition: (v) => !!v,
  },
  engine: {
    icon: BsFuelPump,
    label: (v) => v.charAt(0).toUpperCase() + v.slice(1),
    condition: (v) => !!v,
  },
  AC: {
    icon: LuWind,
    label: () => "AC",
    condition: (v) => v === true,
  },
  bathroom: {
    icon: PiShower,
    label: () => "Bathroom",
    condition: (v) => v === true,
  },
  kitchen: {
    icon: BsCupHot,
    label: () => "Kitchen",
    condition: (v) => v === true,
  },
  TV: {
    icon: HiOutlineTv,
    label: () => "TV",
    condition: (v) => v === true,
  },
  radio: {
    icon: BsUiRadios,
    label: () => "Radio",
    condition: (v) => v === true,
  },
  refrigerator: {
    icon: TbFridge,
    label: () => "Fridge",
    condition: (v) => v === true,
  },
  microwave: {
    icon: LuMicrowave,
    label: () => "Microwave",
    condition: (v) => v === true,
  },
  gas: {
    icon: FaGasPump,
    label: () => "Gas",
    condition: (v) => v === true,
  },
  water: {
    icon: IoWaterOutline,
    label: () => "Water",
    condition: (v) => v === true,
  },
};
