import { HashLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = ({ size = 64, color = "#D84343" }) => {
  return (
    <div className={css.loaderBox}>
      <HashLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
